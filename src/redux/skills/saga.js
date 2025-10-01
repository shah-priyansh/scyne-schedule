import { all, put, takeLatest, fork, select } from "redux-saga/effects";
import {
    getSkills,
    getSkillsSuccess,
    getSkillsError,
    getAverageScore,
    getAverageScoreSuccess,
    getAverageScoreError,
    getMasteryLevel,
    getMasteryLevelSuccess,
    getMasteryLevelError,
    getSkillsDetails,
    getSkillsDetailsSuccess,
    getSkillsDetailsError,
    getSkillsPickList,
    getSkillsPickListError,
    getSkillsPickListSuccess,
    getSkillsOverview,
    getSkillsOverviewSuccess,
    getSkillsOverviewError,
    getAccountsForSkills, getAccountsForSkillsSuccess, getAccountsForSkillsError,
    getSkillVsEmp, getSkillVsEmpSuccess, getSkillVsEmpError,
    getSkillVsEmpAccounts, getSkillVsEmpAccountsSuccess, getSkillVsEmpAccountsError,
    getSkillCategories, getSkillCategoriesSuccess, getSkillCategoriesError,
    addSkill, addSkillError, addSkillSuccess
} from "@/redux/skills/action-reducer.js";
import conn from "@/lib/connnection.js";
import { getProfilePhoto } from "@/lib/common.functions.js";

function* getSkillsDetailsInfo({ payload }) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        let soql = `SELECT Id,
                           Name,
                           Masterylevel__c,
                           Year__c,
                           SkillProficiency__c,
                           ParentSkills__c,
                           (SELECT Id FROM Endorsements__r),
                           (SELECT Id FROM Certificates__r),
                           (SELECT Id FROM Project__r)
                    FROM Skills__c
                    WHERE AccountId__c = '${accountId}'`;
        if (payload.skills && payload.skills.length > 0) {
            soql += ` AND ParentSkills__c IN (${payload.skills.map(s => `'${s}'`).join(',')})`;
        }
        if (payload.search) {
            soql += ` AND Name LIKE '%${payload.search}%'`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let skillsInfo = [];
        if (response.done) {
            skillsInfo = response.records.map(skill => ({
                id: skill.Id,
                name: skill.Name,
                masteryLevel: skill.Masterylevel__c,
                year: skill.Year__c,
                skillProficiency: skill.SkillProficiency__c,
                endorsementCount: skill.Endorsements__r ? skill.Endorsements__r.totalSize : 0,
                certificateCount: skill.Certificates__r ? skill.Certificates__r.totalSize : 0,
                projectCount: skill.Projects__r ? skill.Projects__r.totalSize : 0,
                parentSkill: skill.ParentSkills__c
            }));
        }
        yield put(getSkillsDetailsSuccess(skillsInfo));
    } catch (e) {
        yield put(getSkillsDetailsError(e));
    }
}

function* getMasteryLevelInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT Masterylevel__c, COUNT(Id) total
                      FROM Skills__c
                      WHERE AccountId__c = '${accountId}'
                        AND Masterylevel__c != null
                      GROUP BY Masterylevel__c`;
        const response = yield conn.query(soql);
        let masteryLevels = [];
        if (response.done) {
            let total = 0;
            let advancedCount = 0;
            let intermediateCount = 0;
            response.records.forEach(record => {
                const level = record.Masterylevel__c;
                const count = record.total || record.Total || 0;

                total += count;

                if (level === 'Advanced') {
                    advancedCount += count;
                } else if (level === 'Intermediate') {
                    intermediateCount += count;
                }
            });
            masteryLevels = { total, advancedCount, intermediateCount };
        }
        yield put(getMasteryLevelSuccess(masteryLevels));
    } catch (e) {
        yield put(getMasteryLevelError(e));
    }
}

function* getSkillsCount() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT Id, Name, IsActive__c
                      FROM Skills__c
                      WHERE AccountId__c = '${accountId}' ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let skills = [];
        if (response.done) {
            skills = response.records;
        }
        yield put(getSkillsSuccess(skills));
    } catch (e) {
        yield put(getSkillsError(e));
    }
}

function* getAverageScoreInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT AVG(SkillProficiency__c) avgScore, COUNT(Id) totalSkills
                      FROM Skills__c
                      WHERE AccountId__c = '${accountId}'`;
        const response = yield conn.query(soql);
        let avgScoreValue = 0;
        if (response.done) {
            const record = response.records[0];
            const avgScoreRaw = record.avgScore || 0;
            avgScoreValue = Number(avgScoreRaw.toFixed(2));
        }
        yield put(getAverageScoreSuccess(avgScoreValue));
    } catch (e) {
        yield put(getAverageScoreError(e));
    }
}

function* getSkillsPickListInfo() {
    try {
        const metadata = yield conn.getConnection().sobject('Skills__c').describe()
        const fieldInfo = metadata.fields.find(f => f.name === 'ParentSkills__c');
        let availableSKills = `SELECT Id, Name, ParentSkills__c
                               FROM Skills__c`;
        const response = yield conn.query(availableSKills);
        if (!fieldInfo) {
            yield put(getSkillsPickListSuccess({}));
            return;
        }
        const picklistValues = fieldInfo.picklistValues.map(p => p.value);
        let allSkills = {};
        picklistValues.forEach(record => {
            if (!allSkills[record]) {
                allSkills[record] = [];
            }
            response.records.forEach(skill => {
                if (skill.ParentSkills__c === record) {
                    allSkills[record].push(skill);
                }
            })
        });
        yield put(getSkillsPickListSuccess({ pickList: picklistValues, allSkills }));
    } catch (e) {
        console.log(e);
        yield put(getSkillsPickListError(e));
    }
}

function* getSkillsOverviewInfo({ payload }) {
    try {
        let soql = `SELECT Id, Name, ParentSkills__c, AccountId__c, AccountId__r.Name, SkillProficiency__c
                    FROM Skills__c`;
        let conditions = [];
        if (payload.skills && payload.skills.length > 0) {
            conditions.push(`ParentSkills__c IN (${payload.skills.map(s => `'${String(s).replace(/'/g, "\\'")}'`).join(',')})`)
        }
        if (payload.search && payload.search.trim()) {
            conditions.push(`Name LIKE '%${String(payload.search).replace(/'/g, "\\'")}%'`)
        }
        if (conditions.length) {
            soql += ` WHERE ${conditions.join(' AND ')}`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let overview = [];
        if (response.done) {
            const parentWise = {};
            for (const skill of response.records) {
                const parent = skill.ParentSkills__c || 'Uncategorized';
                (parentWise[parent] ||= []).push({
                    Id: skill.Id,
                    accountId: skill.AccountId__c,
                    skillId: skill.Id,
                    Name: skill.AccountId__r ? skill.AccountId__r.Name : '',
                    skillName: skill.Name || '',
                    skillProficiency: skill.SkillProficiency__c || ''
                });
            }
            overview = Object.keys(parentWise).map(parent => ({
                parent,
                totalCount: parentWise[parent].length,
                childSkills: parentWise[parent]
            }));

            overview = Object.keys(parentWise).map(parent => {
                // Group childSkills by skillName using reduce
                const grouped = parentWise[parent].reduce((acc, skill) => {
                    const key = skill.skillName || 'Unnamed';
                    if (!acc[key]) {
                        acc[key] = {
                            skillName: key,
                            totalCount: 0,
                            records: []
                        };
                    }
                    acc[key].records.push(skill);
                    acc[key].totalCount++;
                    return acc;
                }, {});
                return {
                    parent,
                    totalCount: parentWise[parent].length,
                    childSkills: Object.values(grouped)
                };
            })
        }
        yield put(getSkillsOverviewSuccess(overview));
    } catch (e) {
        yield put(getSkillsOverviewError(e));
    }
}

function* getAccountsForSkillsInfo({ payload }) {
    try {
        let soql = `SELECT Id, ParentSkills__c, Name, AccountId__c, AccountId__r.Name, SkillProficiency__c
                    FROM Skills__c
                    WHERE ParentSkills__c = '${payload.parentSkill}'
                      AND Name = '${payload.childSkill}' ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let accounts = [];
        if (response.done) {
            const accountIds = [...new Set(response.records.map(e => e.AccountId__c).filter(Boolean))];
            const photoRes = yield getProfilePhoto(accountIds, false);
            accounts = response.records.map((rec) => {
                return {
                    accName: rec.AccountId__r?.Name || '',
                    accId: rec.AccountId__c || '',
                    proficiency: rec.SkillProficiency__c || 0,
                    skillId: rec.Id || 0,
                    photo: photoRes[rec.AccountId__c] || null
                };
            })
        }
        yield put(getAccountsForSkillsSuccess(accounts));
    } catch (e) {
        yield put(getAccountsForSkillsError(e));
    }
}

function* getSkillVsEmpInfo({ payload }) {
    try {
        let soql = `SELECT Id, Name, ParentSkills__c, AccountId__c, AccountId__r.Name, SkillProficiency__c
                    FROM Skills__c`;
        let conditions = [];
        if (payload.skills && payload.skills.length > 0) {
            conditions.push(`ParentSkills__c IN (${payload.skills.map(s => `'${String(s).replace(/'/g, "\\'")}'`).join(',')})`)
        }
        if (payload.search && payload.search.trim()) {
            conditions.push(`Name LIKE '%${String(payload.search).replace(/'/g, "\\'")}%'`)
        }
        if (conditions.length) {
            soql += ` WHERE ${conditions.join(' AND ')}`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let vsEmp = [];
        if (response.done) {
            const accountIds = [...new Set(response.records.map(skill => skill.AccountId__c).filter(Boolean))];
            const photoRes = yield getProfilePhoto(accountIds, false);
            const parentWise = {};
            response.records.forEach(skill => {
                const parent = skill.ParentSkills__c || "Uncategorized";
                const skillId = skill.Id;
                const skillName = skill.Name || "";
                const accountId = skill.AccountId__c;
                const accountName = skill.AccountId__r ? skill.AccountId__r.Name : "";

                if (!parentWise[parent]) parentWise[parent] = {};
                if (!parentWise[parent][skillId]) {
                    parentWise[parent][skillId] = {
                        skillId,
                        skillName,
                        accounts: []
                    };
                }

                // Push account for this skill
                parentWise[parent][skillId].accounts.push({
                    accountId,
                    accountName,
                    photo: photoRes[accountId] || null,
                    proficiency: skill.SkillProficiency__c || ""
                });
            });

            vsEmp = Object.keys(parentWise).map(parent => ({
                parent,
                skills: Object.values(parentWise[parent])
            }));
        }
        yield put(getSkillVsEmpSuccess(vsEmp));
    } catch (e) {
        yield put(getSkillVsEmpError(e));
    }
}

function* getSkillVsEmpAccountsInfo({ payload }) {
    try {
        let soql = `SELECT Id, Name, RecordType.DeveloperName
                    FROM Account
                    WHERE RecordType.DeveloperName = 'PersonAccount'`;
        if (payload.search && payload.search.trim()) {
            soql += ` AND Name LIKE '%${String(payload.search).replace(/'/g, "\\'")}%'`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let accounts = [];
        if (response.done) {
            const accountIds = response.records.map(acc => acc.Id);
            const photoRes = yield getProfilePhoto(accountIds, false);
            accounts = response.records.map(acc => ({
                accId: acc.Id,
                accName: acc.Name,
                photo: photoRes[acc.Id] || null
            }));
        }
        yield put(getSkillVsEmpAccountsSuccess(accounts));
    } catch (e) {
        yield put(getSkillVsEmpAccountsError(e));
    }
}

function* getSkillCategoriesInfo() {
    try {
        let soql = `SELECT Id,
                           Name,
                           SkillProficiency__c,
                           ParentSkills__c,
                           AccountId__c,
                           AccountId__r.Name,
                           AccountId__r.PersonDepartment
                    FROM Skills__c
                    WHERE ParentSkills__c != null ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let categories = [];
        if (response.done) {
            const accountIds = [...new Set(response.records.map(e => e.AccountId__c).filter(Boolean))];
            const photoRes = yield getProfilePhoto(accountIds, false);

            const grouped = response.records.reduce((acc, record) => {
                const parent = record.ParentSkills__c || 'Unknown';
                if (!acc[parent]) {
                    acc[parent] = { total: 0, count: 0, records: [] };
                }

                acc[parent].total += Number(record.SkillProficiency__c || 0);
                acc[parent].count += 1;
                const data = {
                    Id: record.Id,
                    name: record.Name,
                    skillProficiency: record.SkillProficiency__c,
                    parentSkill: record.ParentSkills__c,
                    accountName: record.AccountId__r?.Name || null,
                    accId: record.AccountId__c,
                    department: record.AccountId__r?.PersonDepartment || null,
                    photo: photoRes[record.AccountId__c] || null
                }
                acc[parent].records.push(data);
                return acc;
            }, {});

            const parentAverages = Object.entries(grouped).map(([parent, data]) => {
                const avg = data.count > 0 ? data.total / data.count : 0;
                return {
                    parentSkill: parent,
                    average: Math.floor(avg),
                    count: data.count,
                    records: data.records
                };
            });
            const masterAvg = parentAverages.reduce((sum, p) => sum + p.average, 0) / (parentAverages.length || 1);

            categories = {
                parentAverages,
                masterAvg
            };
        }
        yield put(getSkillCategoriesSuccess(categories));
    } catch (e) {
        yield put(getSkillCategoriesError(e));
    }
}

function* addSkillInfo({ payload }) {
    try {
        const insertFileAndLink = async (fileMeta, parentId, title) => {
            const { fileName, base64Data } = fileMeta;
            const cv = await conn.getConnection().sobject('ContentVersion').create({
                Title: title,
                PathOnClient: fileName,
                VersionData: base64Data
            });
            if (cv.success) {
                const contentVer = await conn.getConnection().sobject('ContentVersion').retrieve(cv.id);
                const cdId = contentVer.ContentDocumentId;
                await conn.getConnection().sobject('ContentDocumentLink').create({
                    ContentDocumentId: cdId,
                    LinkedEntityId: parentId,
                    ShareType: 'V',
                    Visibility: "AllUsers",
                });
            }
        }
        let { skillDetails: skills, certificateData, projectData } = payload;
        const response = yield conn.getConnection().sobject('Skills__c').create({
            Name: skills.Name,
            Year__c: skills.year,
            Masterylevel__c: skills.masterylevel,
            SelfSkillRating__c: skills.selfSkillRating,
            SkillProficiency__c: skills.skillProficiency,
            ParentSkills__c: skills.prentSkill,
            SkillDescription__c: skills.skillDescription,
            Endorsement__c: skills.endorsement,
            AccountId__c: skills.accountId
        });
        if (response.success) {
            let certificateResponse = yield conn.getConnection().sobject('Certificate__c').create(certificateData.map(c => ({
                CertificateName__c: c.certificateName,
                Name: c.certificateName,
                CertificateLink__c: c.certificateLink,
                CertificateDescription__c: c.certificateDescription,
                CertificateIssueDate__c: c.certificateIssueDate,
                SkillId__c: response.id, // Lookup to Skill
                AccountId__c: c.accountId // Lookup to Account
            })));
            for (let i = 0; i < certificateResponse.length; i++) {
                if (certificateResponse[i].success) {
                    if (certificateData[i].CertificateImage) {
                        yield insertFileAndLink(certificateData[i].CertificateImage, certificateResponse[i].id, certificateData[i].certificateName)
                    }
                }
            }

            let projectResponse = yield conn.getConnection().sobject('Project__c').create(projectData.map(p => ({
                ProjectTitle__c: p.projectTitle,
                Name: p.projectTitle,
                ProjectDescription__c: p.projectDescription,
                Timeline__c: p.timeline,
                SkillsId__c: response.id, // Lookup to Skill
                AccountId__c: p.accountId // Lookup to Account
            })));
            for (let i = 0; i < projectResponse.length; i++) {
                if (projectResponse[i].success) {
                    if (projectData[i].ProjectImage) {
                        yield insertFileAndLink(projectData[i].ProjectImage, projectResponse[i].id, projectData[i].projectTitle)
                    }
                }
            }
            yield put(getSkillsDetails({
                accountId: skills.accountId
            }))

        }
        yield put(addSkillSuccess());
    } catch (e) {
        console.log(e);
        yield put(addSkillError(e));
    }
}

export function* watchGetSkills() {
    yield takeLatest(getSkills.type, getSkillsCount);
}

export function* watchAverageScore() {
    yield takeLatest(getAverageScore.type, getAverageScoreInfo);
}

export function* watchMasteryLevel() {
    yield takeLatest(getMasteryLevel.type, getMasteryLevelInfo);
}

export function* watchSkillsDetails() {
    yield takeLatest(getSkillsDetails.type, getSkillsDetailsInfo);
}

export function* watchSkillsPicklist() {
    yield takeLatest(getSkillsPickList.type, getSkillsPickListInfo);
}

export function* watchSkillsOverview() {
    yield takeLatest(getSkillsOverview.type, getSkillsOverviewInfo);
}

export function* watchGetAccountsForSkills() {
    yield takeLatest(getAccountsForSkills.type, getAccountsForSkillsInfo);
}

export function* watchGetSkillVsEmp() {
    yield takeLatest(getSkillVsEmp.type, getSkillVsEmpInfo);
}

export function* watchGetSkillVsEmpAccounts() {
    yield takeLatest(getSkillVsEmpAccounts.type, getSkillVsEmpAccountsInfo);
}

export function* watchGetSkillCategories() {
    yield takeLatest(getSkillCategories.type, getSkillCategoriesInfo);
}

export function* watchAddSkill() {
    yield takeLatest(addSkill.type, addSkillInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetSkills),
        fork(watchAverageScore),
        fork(watchMasteryLevel),
        fork(watchSkillsDetails),
        fork(watchSkillsPicklist),
        fork(watchSkillsOverview),
        fork(watchGetAccountsForSkills),
        fork(watchGetSkillVsEmp),
        fork(watchGetSkillVsEmpAccounts),
        fork(watchGetSkillCategories),
        fork(watchAddSkill),
    ])
}
