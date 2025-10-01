import {all, put, takeLatest, fork, select} from "redux-saga/effects";
import {
    getCareerRoles, getCareerRolesSuccess, getCareerRolesError,
    addCareerRoles, addCareerRolesSuccess, addCareerRolesError,
    updateCareerRoles, updateCareerRolesSuccess, updateCareerRolesError,
    deleteCareerRoles, deleteCareerRolesSuccess, deleteCareerRolesError
} from "@/redux/roles/action-reducer.js";
import conn from "@/lib/connnection.js";

function* getCareerRolesInfo({payload}) {

    const state = yield select();
    const accountId = state.profile.accountId;
    try {
        const soql = `SELECT Id,
                             Title__c,
                             CompanyOrganization__c,
                             EmployeeType__c,
                             StartDate__c,
                             EndDate__c,
                             Description__c,
                             AccountId__c
                      FROM CareerRole__c
                      WHERE AccountId__c = '${accountId}'
                      Order By StartDate__c Asc`;
        const response = yield conn.query(soql);
        let qualifications = [];
        if (response.done) {
            qualifications = response.records.map(cr => ({
                Id: cr.Id,
                title: cr.Title__c,
                companyOrganization: cr.CompanyOrganization__c,
                employeeType: cr.EmployeeType__c,
                startDate: cr.StartDate__c ||  null,
                endDate: cr.EndDate__c || null,

                description: cr.Description__c
            }));
        }
        yield put(getCareerRolesSuccess(qualifications));
    } catch (e) {
        yield put(getCareerRolesError(e));
    }
}

function* addCareerRolesInfo({payload}) {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const response = yield conn.getConnection().sobject('CareerRole__c').create({
            Title__c: payload.title,
            Name: payload.title,
            EmployeeType__c: payload.employeeType,
            CompanyOrganization__c: payload.company,
            StartDate__c: payload.startDate,
            EndDate__c: payload.isCurrent ? null : payload.endDate,
            Description__c: payload.description,
            IsCurrentlyWorking__c: payload.isCurrent,
            AccountId__c: accountId
        });
        if (response.success) {
            yield put(getCareerRoles(payload));
        }
        yield put(addCareerRolesSuccess());
    } catch (e) {
        yield put(addCareerRolesError(e));
    }
}

function* updateCareerRolesInfo({payload}) {
    try {
        const response = yield conn.getConnection().sobject('CareerRole__c').update({
            Id: payload.Id,
            Title__c: payload.title,
            Name: payload.title,
            EmployeeType__c: payload.employeeType,
            CompanyOrganization__c: payload.company,
            StartDate__c: payload.startDate,
            EndDate__c: payload.isCurrent ? null : payload.endDate,
            Description__c: payload.description,
            IsCurrentlyWorking__c: payload.isCurrent,
        });
        if (response.success) {
            yield put(getCareerRoles(payload));
        }
        yield put(updateCareerRolesSuccess());
    } catch (e) {
        yield put(updateCareerRolesError(e));
    }
}

function* deleteCareerRolesInfo({payload}) {
    try {
        const response = yield conn.getConnection().sobject('CareerRole__c').delete(payload.id);
        if (response.success) {
            yield put(getCareerRoles(payload));
        }
        yield put(deleteCareerRolesSuccess());
    } catch (e) {
        yield put(deleteCareerRolesError(e));
    }
}

export function* watchGetRoles() {
    yield takeLatest(getCareerRoles.type, getCareerRolesInfo);
}

export function* watchAddCareerRoles() {
    yield takeLatest(addCareerRoles.type, addCareerRolesInfo);
}

export function* watchUpdateCareerRoles() {
    yield takeLatest(updateCareerRoles.type, updateCareerRolesInfo);
}

export function* watchDeleteCareerRoles() {
    yield takeLatest(deleteCareerRoles.type, deleteCareerRolesInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetRoles),
        fork(watchAddCareerRoles),
        fork(watchUpdateCareerRoles),
        fork(watchDeleteCareerRoles),
    ])
}
