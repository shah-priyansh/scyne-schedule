import {all, call, fork, put, select, takeLatest} from "redux-saga/effects";
import {
    getAverageEndorsement,
    getAverageEndorsementError,
    getAverageEndorsementSuccess,
    getTotalEndorsement,
    getTotalEndorsementError,
    getTotalEndorsementSuccess,
    getEndorsement, getEndorsementSuccess, getEndorsementError,
    getPendingEngagements, getPendingEngagementsSuccess, getPendingEngagementsError,
    createEndorsement, createEndorsementSuccess,createEndorsementError
} from "@/redux/endorsements/action-reducer.js";
import conn from "@/lib/connnection.js";
import {getProfilePhoto} from "@/lib/common.functions.js";

function* getPendingEngagementsInfo({payload}) {
    try {
        const soql = `SELECT Id,
                             Name,
                             AccountId__c,
                             AccountId__r.RecordType.DeveloperName,
                             AccountId__r.Name,
                             (SELECT Id, EndorseeId__c, EndorsedById__c FROM Endorsements__r)
                      FROM Skills__c ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let endorsements = 0;
        if (response.done) {

            const exclusionIds = new Set();
            response.records.forEach(skill => {
                if (skill.Endorsements__r && skill.Endorsements__r.records) {
                    skill.Endorsements__r.records.forEach(endorsement => {
                        if (endorsement.EndorseeId__c) exclusionIds.add(endorsement.EndorseeId__c);
                        if (endorsement.EndorsedById__c) exclusionIds.add(endorsement.EndorsedById__c);
                    });
                }
            });

            let exclusionClause = '';
            if (exclusionIds.size > 0) {
                exclusionClause = `AND Id NOT IN (${Array.from(exclusionIds).map(id => `'${id}'`).join(',')})`;
            }

            const searchNameFilter = payload.search && payload.search.trim() !== '' ? ` AND Name LIKE '%${payload.search}%'` : '';

            const soql1 = `SELECT Id, Name, RecordType.DeveloperName
                           FROM Account
                           WHERE RecordType.DeveloperName = 'PersonAccount'
                             AND Id IN (SELECT AccountId__c
                                        FROM Skills__c
                                        WHERE AccountId__c
                               != null
                               ) ${exclusionClause} ${searchNameFilter} ORDER BY CreatedDate DESC`

            const response2 = yield conn.query(soql1);
            if (response2.done) {
                const accountIds = [...new Set(response2.records.map(e => e.AccountId__c).filter(Boolean))];
                const photoRes = yield getProfilePhoto(accountIds, false);
                endorsements = response2.records.map(account => {
                    // find related skills for this account from skillsRes
                    const relatedSkills = response.records
                        .filter(skill => skill.AccountId__c === account.Id)
                        .map(skill => ({
                            skillId: skill.Id,
                            skillName: skill.Name
                        }));

                    return {
                        id: account.Id,
                        name: account.Name,
                        recordType: account.RecordType?.DeveloperName || null,
                        skills: relatedSkills,
                        photo: photoRes[account.Id] || null  // attach photo here

                    };
                })
            }
        }
        yield put(getPendingEngagementsSuccess(endorsements));
    } catch (e) {
        yield put(getPendingEngagementsError(e));
    }
}

function* watchGetEndorsementInfo({payload}) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        let filter = payload.type === 'Given' ? `EndorsedById__c = '${accountId}'`: `EndorseeId__c = '${accountId}'`
        let soql = `Select Id,
                           Name,
                           AccountId__r.Name,
                           SkillsId__r.Name,
                           SkillsId__r.Endorsement__c,
                           EngagementType__c,
                           SkillsId__r.ParentSkills__c,
                           Date__c,
                           EndorseeId__c,
                           EndorseeId__r.Name,
                           EndorsedById__c,
                           EndorsedById__r.Name,
                           AccountId__c
                    from Endorsement__c
                    where ${filter}
                      AND EngagementType__c = '${payload.type}'`;
        if (payload.search) {
            soql += ` AND Name LIKE '%${payload.search}%'`;
        }
        if (payload.skills && payload.skills.length > 0) {
            soql += ` AND SkillsId__r.ParentSkills__c IN (${payload.skills.map(s => `'${s}'`).join(",")})`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let endorsements = [];
        if (response.done) {
            const accountIds = [...new Set(response.records.map(e => e.AccountId__c).filter(Boolean))];
            const photoRes = yield getProfilePhoto(accountIds, false);
            endorsements = response.records.map(e => {
                return {
                    Id: e.Id,
                    name: e.Name,
                    accountName: payload.type === 'Given' ? e.EndorseeId__r?.Name : e.EndorsedById__r?.Name || null,
                    skillName: e.SkillsId__r ? e.SkillsId__r.Name : null,
                    endorsement: e.SkillsId__r ? e.SkillsId__r.Endorsement__c : null,
                    date: e.Datec ? e.Date__c.split('T')[0] : null, // keep only YYYY-MM-DD
                    accountId: payload.type === 'Given' ? e.EndorseeId__c : e.EndorsedById__c || null,
                    photo: photoRes[payload.type === 'Given' ? e.EndorseeId__c : e.EndorsedById__c || null] || null
                }
            });
        }
        yield put(getEndorsementSuccess({type: payload.type, data: endorsements}));
    } catch (e) {
        console.log('D', e);
        yield put(getEndorsementError({type: payload.type, data: e}));
    }
}

function* getTotalEndorsementInfo({payload}) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        let filter = payload.type === 'Given' ? `EndorsedById__c = '${accountId}'`: `EndorseeId__c = '${accountId}'`
        const soql = `SELECT COUNT()
                      FROM Endorsement__c
                      WHERE ${filter}
                        AND EngagementType__c = '${payload.type}'`;
        const response = yield conn.query(soql);
        let totalEndorsement = 0;
        if (response.done) {
            totalEndorsement = response.totalSize;
        }
        yield put(getTotalEndorsementSuccess({type: payload.type, data: totalEndorsement}));
    } catch (e) {
        yield put(getTotalEndorsementError({type: payload.type, data: e}));
    }
}

function* getAverageEndorsementInfo({payload}) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        let filter = payload.type === 'Given' ? `EndorsedById__c = '${accountId}'`: `EndorseeId__c = '${accountId}'`
        const totalSoql = `SELECT AccountId__c, COUNT(Id) totalEndorsements
                           FROM Endorsement__c
                           WHERE AccountId__c = '${accountId}'
                           GROUP BY AccountId__c`;
        const typeSoql = `SELECT AccountId__c, COUNT(Id) totalByType
                          FROM Endorsement__c
                          WHERE EngagementType__c = '${payload.type}'
                            AND ${filter}
                          GROUP BY AccountId__c`;

        const [totalRes, typeRes] = yield call(() => Promise.all([
            conn.query(totalSoql), conn.query(typeSoql)
        ]));
        let avgEndorsement = 0;
        if (totalRes.done && typeRes.done) {
            const total = totalRes.records.length > 0 ? totalRes.records[0].totalEndorsements : 0;
            const countByType = typeRes.records.length > 0 ? typeRes.records[0].totalByType : 0;
            avgEndorsement = total > 0 ? ((countByType / total) * 100).toFixed(2) : 0;
        }
        yield put(getAverageEndorsementSuccess({type: payload.type, data: avgEndorsement}));
    } catch (e) {
        yield put(getAverageEndorsementError({type: payload.type, data: e}));
    }
}

function* createEndorsementInfo({payload}) {
    try {
        let endorsement = payload;
        let response = yield conn.getConnection().sobject('Endorsement__c').create({
            EndorseeId__c: endorsement.endorseeId,
            EndorsedById__c: endorsement.endorsedById,
            AccountId__c:endorsement.endorsedById,
            Comment__c: endorsement.comment,
            Name:'Test Endorsement',
            SkillsId__c: endorsement.skillId || null,
            EngagementType__c: 'Given'
        });
        if (response.success) {
            yield conn.getConnection().sobject('Skills__c').update({
                Id: endorsement.skillId,
                Endorsement__c: endorsement.endorsement
            })

            yield put(getPendingEngagements({}))
        }
        yield put(createEndorsementSuccess());
    } catch (e) {
        yield put(createEndorsementError(e));
    }
}

export function* watchGetTotalEndorsement() {
    yield takeLatest(getTotalEndorsement.type, getTotalEndorsementInfo);
}

export function* watchGetAverageEndorsement() {
    yield takeLatest(getAverageEndorsement.type, getAverageEndorsementInfo);
}

export function* watchGetEndorsement() {
    yield takeLatest(getEndorsement.type, watchGetEndorsementInfo);
}

export function* watchGetPendingEngagements() {
    yield takeLatest(getPendingEngagements.type, getPendingEngagementsInfo);
}

export function* watchCreateEndorsement() {
    yield takeLatest(createEndorsement.type, createEndorsementInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetTotalEndorsement),
        fork(watchGetAverageEndorsement),
        fork(watchGetEndorsement),
        fork(watchGetPendingEngagements),
        fork(watchCreateEndorsement),
    ])
}
