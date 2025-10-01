import {all, put, takeLatest, fork, call, select} from "redux-saga/effects";
import {
    getAccountInfo, getAccountInfoError, getAccountInfoSuccess,
    getProfileImage, getProfileImageSuccess, getProfileImageError,
    getSkillPoints, getSkillPointsSuccess, getSkillPointsError,
    getAwards, getAwardsSuccess, getAwardsError,
    getEndorsements, getEndorsementsSuccess, getEndorsementsError,
    getOverallCompetency, getOverallCompetencySuccess, getOverallCompetencyError,
    getMyProfile, getMyProfileSuccess, getMyProfileError, getShapeChart, getShapeChartSuccess, getShapeChartError,
    updateMyProfile, updateMyProfileSuccess, updateMyProfileError
} from "@/redux/profile/action-reducer.js";
import conn from "@/lib/connectionWrapper.js";
import {getProfilePhoto} from "@/lib/common.functions.js";
import { setError } from "@/redux/error/action-reducer.js";
import { detectErrorType, ERROR_TYPES } from "@/lib/errorHandler.js";

function* getAccountInfoDetails({payload}) {
    try {
        const soql = `SELECT Id, Name, Recordtype.Name, UserTeam__c, UserRole__c, BillingAddress
                      FROM Account
                      WHERE SkillUser__c = '${payload.userId}' ORDER BY CreatedDate DESC  LIMIT 1`;
        const response = yield conn.query(soql);
        let profileInfo = null;
        if (response.done) {
            profileInfo = response.records[0];
        }
        yield put(getAccountInfoSuccess(profileInfo));
    } catch (e) {
        console.error('Error in getAccountInfoDetails:', e);
        const errorType = detectErrorType(e);
        yield put(setError({
            type: errorType,
            message: e.message || 'Failed to fetch account information',
            source: 'getAccountInfoDetails',
            originalError: e
        }));
        yield put(getAccountInfoError(e));
    }
}

function* getProfileImageUser({payload}) {
    try {
        const profileImage = yield getProfilePhoto(payload.userId, true);
        yield put(getProfileImageSuccess(profileImage));
    } catch (e) {
        console.error('Error in getProfileImageUser:', e);
        const errorType = detectErrorType(e);
        yield put(setError({
            type: errorType,
            message: e.message || 'Failed to fetch profile image',
            source: 'getProfileImageUser',
            originalError: e
        }));
        yield put(getProfileImageError(e));
    }
}

function* getSkillPoint() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT Id, RewardPoint__c from Account where Id = '${accountId}' ORDER BY CreatedDate DESC `;
        const response = yield conn.query(soql);
        let skillPoints = null;
        if (response.done) {
            skillPoints = response.records[0].RewardPoint__c || 0;
        }
        yield put(getSkillPointsSuccess(skillPoints));
    } catch (e) {
        console.error('Error in getSkillPoint:', e);
        const errorType = detectErrorType(e);
        yield put(setError({
            type: errorType,
            message: e.message || 'Failed to fetch skill points',
            source: 'getSkillPoint',
            originalError: e
        }));
        yield put(getSkillPointsError(e));
    }
}

function* getAwardsInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql2 = `SELECT Id, AwardsName__c,MaxPoints__c FROM AwardsMaster__c ORDER BY MaxPoints__c ASC`;
        const soql = `SELECT Id, RewardPoint__c FROM Account WHERE Id = '${accountId}' ORDER BY CreatedDate DESC`;
        const [response, range] = yield call(() => Promise.all([conn.query(soql), conn.query(soql2)]));
        let award = null;
        if (response.done && range.done) {
            let rewards = response.records[0].RewardPoint__c;
            let awardRes = yield conn.query(`SELECT Id, AwardsName__c, MaxPoints__c FROM AwardsMaster__c ORDER BY MaxPoints__c ASC`);
            let lowerAward = null;
            let higherAward = null;
            for (let a of awardRes.records) {
                if (a.MaxPoints__c <= rewards) {
                    lowerAward = a;
                }
                if (a.MaxPoints__c > rewards && !higherAward) {
                    higherAward = a;
                    break;
                }
            }
            award = {
                lower: lowerAward ? {
                    id: lowerAward.Id,
                    name: lowerAward.AwardsName__c,
                    maxPoints: lowerAward.MaxPoints__c
                } : null,
                higher: higherAward ? {
                    id: higherAward.Id,
                    name: higherAward.AwardsName__c,
                    maxPoints: higherAward.MaxPoints__c
                } : null,
                tiers: range.records.map((rec) => ({
                    Id: rec.Id,
                    name: rec.AwardsName__c,
                    points: rec.MaxPoints__c
                }))
            }
        }
        yield put(getAwardsSuccess(award));
    } catch (e) {
        yield put(getAwardsError(e));
    }
}

function* getEndorsementsInfo({payload}) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT Id, SkillId__r.Name
                      FROM Endorsement__c
                      WHERE AccountId__c = '${accountId}' ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let endorsements = [];
        if (response.done) {
            endorsements = response.records;
        }
        yield put(getEndorsementsSuccess(endorsements));
    } catch (e) {
        yield put(getEndorsementsError(e));
    }
}

function* getOverallCompetencyInfo({payload}) {
    try {
        const soql = `SELECT Id, Name, OverallCompetency__c
                      FROM Account
                      WHERE SkillUser__c = '${payload.userId}' ORDER BY CreatedDate DESC  LIMIT 1`;
        const response = yield conn.query(soql);
        let endorsements = [];
        if (response.done) {
            endorsements = response.records[0];
        }
        yield put(getOverallCompetencySuccess(endorsements));
    } catch (e) {
        yield put(getOverallCompetencyError(e));
    }
}

function* getMyProfileInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const aboutMe = `SELECT Id, Name, UserRole__c, UserTeam__c, ShippingAddress, Description FROM Account WHERE Id = '${accountId}' Order By Createddate Desc`;
        const contactInfo = `SELECT Id, Email, Phone, LinkedIn__c, Website__c, GitHub__c, Background__c, WhatDrivesMe__c, Account.Id, Account.Started__c, Account.Tenure__c, Account.TimeZone__c, ReportsTo.Name FROM Contact WHERE Primary_Contact__c = true AND AccountId = '${accountId}' Order By Createddate Desc LIMIT 1`
        const skillsInfo = `SELECT Id, Name, ParentSkills__c FROM Skills__c WHERE AccountId__c = '${accountId}' Order By Createddate Desc`;
        const [myInfo, contact, skills] = yield call(() => Promise.all([
            conn.query(aboutMe), conn.query(contactInfo), conn.query(skillsInfo)
        ]));
        let myProfile = null;
        if (myInfo.done && contact.done && skills.done) {
            let abo= myInfo.records[0];
            let con = contact.records[0];
            const parentWiseSkills = {};
            skills.records.forEach(skill => {
                const parent = skill.ParentSkills__c || "Uncategorized";
                if (!parentWiseSkills[parent]) {
                    parentWiseSkills[parent] = [];
                }
                parentWiseSkills[parent].push(skill);
                parentWiseSkills[parent] = [...new Set(parentWiseSkills[parent])];
            });
            myProfile = {
                Id: abo.Id,
                Name: abo.Name,
                UserRole: abo.UserRole__c,
                UserTeam: abo.UserTeam__c,
                Description: abo.Description,
                ShippingAddress: abo.ShippingAddress,
                conId: con.Id,
                Email: con.Email,
                Phone: con.Phone,
                LinkedIn: con.LinkedIn__c,
                Website: con.Website__c,
                Github: con.GitHub__c,
                Background: con.Background__c,
                WhatDrivesMe: con.WhatDrivesMe__c,
                Started: con.Account.Started__c,
                Tenure: con.Account.Tenure__c,
                TimeZone: con.Account.TimeZone__c,
                ReportsTo: con.ReportsTo.Name,
                skills: parentWiseSkills
            };
        }
        yield put(getMyProfileSuccess(myProfile));
    } catch (e) {
        yield put(getMyProfileError(e));
    }
}

function* getShapeChartInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT ParentSkills__c, AVG(SkillProficiency__c) avgProficiency
                      FROM Skills__c
                      WHERE AccountId__c = '${accountId}' GROUP BY ParentSkills__c`;
        const response = yield conn.query(soql);
        let chart = {};
        if (response.done) {
            response.records.forEach(r => {
                chart[r.ParentSkills__c] = Math.floor(r.avgProficiency) || 0;
            });
        }
        yield put(getShapeChartSuccess(chart));
    } catch (e) {
        yield put(getShapeChartError(e));
    }
}

function* updateMyProfileInfo({payload}) {
    try {
        let {
            accountId,
            accountDetails,
            contactDetails,
            newGroupedSkills = [],
            profilePicture
        } = payload;
        if (accountId && accountDetails) {
            yield conn.getConnection().sobject("Account").update({
                Id: accountId,
                FirstName: accountDetails.firstName,
                LastName: accountDetails.lastName,
                UserRole__c: accountDetails.UserRole,
                Description: accountDetails.Description,
            });
        }
        if (contactDetails?.Id) {
            yield conn.getConnection().sobject("Contact").update({
                Id: contactDetails.Id,
                Email: contactDetails.Email,
                Phone: contactDetails.Phone,
                LinkedIn__c: contactDetails.LinkedIn,
                Website__c: contactDetails.Website,
                GitHub__c: contactDetails.Github,
                Background__c: contactDetails.Background,
                WhatDrivesMe__c: contactDetails.WhatDrivesMe,
            });
        }

        if (Array.isArray(newGroupedSkills)) {
            const newSkillsById = {};
            const newSkillsToCreate = [];

            newGroupedSkills.forEach((group) => {
                group.Skills.forEach((skill) => {
                    if (skill.Id) {
                        newSkillsById[skill.Id] = {
                            name: skill.name,
                            parent: group.Parent,
                        };
                    } else {
                        newSkillsToCreate.push({
                            Name: skill.name,
                            ParentSkills__c: group.Parent,
                            AccountId__c: accountId,
                        });
                    }
                });
            });

            // Fetch existing skills
            const existingRes = yield conn.query(`
        SELECT Id, Name, ParentSkills__c 
        FROM Skills__c 
        WHERE AccountId__c = '${accountId}'
      `);
            const existingSkills = existingRes.records;

            const toDelete = [];
            const toUpdate = [];
            const newSkillIds = new Set(Object.keys(newSkillsById));

            existingSkills.forEach((skill) => {
                const skillId = skill.Id;
                if (!newSkillIds.has(skillId)) {
                    toDelete.push(skillId);
                } else {
                    const newParent = newSkillsById[skillId].parent;
                    if (skill.ParentSkills__c !== newParent) {
                        toUpdate.push({
                            Id: skillId,
                            ParentSkills__c: newParent,
                        });
                    }
                }
            });

            // Perform DML
            if (toDelete.length > 0) {
                yield conn.getConnection().sobject("Skills__c").del(toDelete);
            }
            if (toUpdate.length > 0) {
                yield conn.getConnection().sobject("Skills__c").update(toUpdate);
            }
            if (newSkillsToCreate.length > 0) {
                yield conn.getConnection().sobject("Skills__c").create(newSkillsToCreate);
            }
        }

        if (profilePicture?.fileName && profilePicture?.base64Data && accountId) {
            // Step 1: Create ContentVersion
            const contentVersionRes = yield conn.getConnection().sobject("ContentVersion").create({
                Title: profilePicture.fileName,
                PathOnClient: profilePicture.fileName,
                VersionData: profilePicture.base64Data,
            });

            if (!contentVersionRes.success) {
                throw new Error("Failed to upload profile picture.");
            }

            const contentVersionId = contentVersionRes.id;

            // Step 2: Get ContentDocumentId
            const queryRes = yield conn.query(`
        SELECT ContentDocumentId 
        FROM ContentVersion 
        WHERE Id = '${contentVersionId}' 
        LIMIT 1
      `);

            const contentDocumentId = queryRes.records?.[0]?.ContentDocumentId;

            if (!contentDocumentId) {
                throw new Error("Failed to retrieve ContentDocumentId after upload.");
            }

            // Step 3: Link to Contact via ContentDocumentLink
            yield conn.getConnection().sobject("ContentDocumentLink").create({
                ContentDocumentId: contentDocumentId,
                LinkedEntityId: accountId,
                ShareType: "V",
                Visibility: "AllUsers",
            });
        }
        yield put(getMyProfile(payload));
        yield put(updateMyProfileSuccess());
    } catch (e) {
        yield put(updateMyProfileError(e));
    }
}

export function* watchGetAccountInfo() {
    yield takeLatest(getAccountInfo.type, getAccountInfoDetails);
}

export function* watchGetProfileImage() {
    yield takeLatest(getProfileImage.type, getProfileImageUser);
}

export function* watchGetSkillPoints() {
    yield takeLatest(getSkillPoints.type, getSkillPoint);
}

export function* watchGetAwards() {
    yield takeLatest(getAwards.type, getAwardsInfo);
}

export function* watchGetEndorsements() {
    yield takeLatest(getEndorsements.type, getEndorsementsInfo);
}

export function* watchGetOverallCompetency() {
    yield takeLatest(getOverallCompetency.type, getOverallCompetencyInfo);
}

export function* watchGetMyProfile() {
    yield takeLatest(getMyProfile.type, getMyProfileInfo);
}

export function* watchGetShapeChart() {
    yield takeLatest(getShapeChart.type, getShapeChartInfo);
}

export function* watchUpdateMyProfile() {
    yield takeLatest(updateMyProfile.type, updateMyProfileInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetAccountInfo),
        fork(watchGetProfileImage),
        fork(watchGetSkillPoints),
        fork(watchGetAwards),
        fork(watchGetEndorsements),
        fork(watchGetOverallCompetency),
        fork(watchGetMyProfile),
        fork(watchGetShapeChart),
        fork(watchUpdateMyProfile),
    ])
}
