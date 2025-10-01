import { all, put, takeLatest, fork, select } from "redux-saga/effects";
import {
    getQualifications, getQualificationsSuccess, getQualificationsError,
    addQualifications, addQualificationsSuccess, addQualificationsError,
    updateQualifications, updateQualificationsSuccess, updateQualificationsError,
    getAllSkillsForQualification, getAllSkillsForQualificationSuccess, getAllSkillsForQualificationError
} from "@/redux/qualifications/action-reducer.js";
import conn from "@/lib/connnection.js";

function* getQualificationsInfo({ payload }) {
    const state = yield select();
    const accountId = state.profile.accountId;
    try {
        let soql = `SELECT Id,
                           Name,
                           IssuingOrganization__c,
                           ValidUntil__c,
                           GPACredentialID__c,
                           QualificationCompletionDate__c,
                           QualificationStartDate__c,
                           Grade__c,
                           CourseLink__c,
                           EducationLink__c,
                           (SELECT Id, Name FROM Skills__r)
                    From Qualification__c
                    Where AccountId__c = '${accountId}' `;
        if (payload.search) {
            soql += ` AND Name LIKE '%${payload.search}%'`;
        }
        soql += ` ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let qualifications = [];
        if (response.done) {
            qualifications = response.records.map(qualification => ({
                Id: qualification.Id,
                name: qualification.Name,
                issuingOrganization: qualification.IssuingOrganization__c,
                validUntil: qualification.ValidUntil__c,
                completeDate: qualification.QualificationCompletionDate__c,
                startDate: qualification.QualificationStartDate__c,
                grade: qualification.Grade__c,
                courseLink: qualification.CourseLink__c,
                educationLink: qualification.EducationLink__c,
                GPACredentialID: qualification.GPACredentialID__c,
                skills: qualification.Skills__r
                    ? qualification.Skills__r.records.map(skill => ({
                        Id: skill.Id,
                        name: skill.Name
                    }))
                    : []
            }));
        }
        yield put(getQualificationsSuccess(qualifications));
    } catch (e) {
        yield put(getQualificationsError(e));
    }
}

function* addQualificationsInfo({ payload }) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;

        const response = yield conn.getConnection().sobject("Qualification__c").create({
            AccountId__c: accountId,
            Name: payload.qualificationName,
            IssuingOrganization__c: payload.issuingOrganization,
            QualificationStartDate__c: payload.startDate,
            QualificationCompletionDate__c: payload.completionDate,
            ValidUntil__c: payload.validUntil,
            GPACredentialID__c: payload.gpaCredentialId,
            Grade__c: payload.grade,
            CourseLink__c: payload.courseLink,
            EducationLink__c: payload.educationLink,
            CurrencyIsoCode: payload.currency || "USD"
        });
        if (response.success) {
            if (payload.relatedSkills && payload.relatedSkills.length > 0) {
                yield updateSkillsWithQualification(payload.relatedSkills.map(s => s.Id), response.id);
            }
            yield put(getQualifications(payload));
        }
        yield put(addQualificationsSuccess());
    } catch (e) {
        yield put(addQualificationsError(e));
    }
}

async function updateSkillsWithQualification(skillIds, qualificationId) {
    const existingSkills = await conn.getConnection().sobject("Skills__c")
        .find({ QualificationId__c: qualificationId }, "Id");
    const existingSkillIds = existingSkills.map(s => s.Id);
    let updates = [];
    if (!skillIds || skillIds.length === 0) {
        // Case 1: No skills provided → unlink all currently linked skills
        updates = existingSkillIds.map(skillId => ({
            Id: skillId,
            QualificationId__c: null
        }));
    } else {
        // Case 2: Some skills provided
        const skillsToUnlink = existingSkillIds.filter(id => !skillIds.includes(id));

        updates = [
            // Link or relink provided skills
            ...skillIds.map(skillId => ({
                Id: skillId,
                QualificationId__c: qualificationId
            })),
            // Unlink old ones
            ...skillsToUnlink.map(skillId => ({
                Id: skillId,
                QualificationId__c: null
            }))
        ];
    }
    if (updates.length === 0) return;
    await conn.getConnection().sobject("Skills__c").update(updates)
}

function* updateQualificationsInfo({ payload }) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const response = yield conn.getConnection().sobject("Qualification__c").update({
            Id: payload.Id,
            AccountId__c: accountId,
            Name: payload.qualificationName,
            IssuingOrganization__c: payload.issuingOrganization,
            QualificationStartDate__c: payload.startDate,
            QualificationCompletionDate__c: payload.completionDate,
            ValidUntil__c: payload.validUntil,
            GPACredentialID__c: payload.gpaCredentialId,
            Grade__c: payload.grade,
            CourseLink__c: payload.courseLink,
            EducationLink__c: payload.educationLink,
            CurrencyIsoCode: payload.currency || "USD",
        });
        if (response.success) {
            yield updateSkillsWithQualification(payload.relatedSkills.map(s => s.Id), payload.Id);
            yield put(getQualifications(payload));
        }
        yield put(updateQualificationsSuccess());
    } catch (e) {
        console.log('E', e);
        yield put(updateQualificationsError(e));
    }
}

function* getAllSkillsForQualificationInfo({ payload }) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        let soql = `SELECT Id, Name FROM Skills__c Where AccountId__c = '${accountId}'`;
        const response = yield conn.query(soql);
        let skills = [];
        if (response.done) {
            skills = response.records;
        }
        yield put(getAllSkillsForQualificationSuccess(skills));
    } catch (e) {
        yield put(getAllSkillsForQualificationError(e));
    }
}

export function* watchGetQualifications() {
    yield takeLatest(getQualifications.type, getQualificationsInfo);
}

export function* watchAddQualifications() {
    yield takeLatest(addQualifications.type, addQualificationsInfo);
}

export function* watchUpdateQualifications() {
    yield takeLatest(updateQualifications.type, updateQualificationsInfo);
}

export function* watchGetAllSkillsForQualification() {
    yield takeLatest(getAllSkillsForQualification.type, getAllSkillsForQualificationInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetQualifications),
        fork(watchAddQualifications),
        fork(watchUpdateQualifications),
        fork(watchGetAllSkillsForQualification),
    ])
}
