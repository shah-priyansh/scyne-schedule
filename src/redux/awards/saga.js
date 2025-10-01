import {all, put, takeLatest, fork, select} from "redux-saga/effects";
import {
    getAwardEndorsementEngagement, getAwardEndorsementEngagementSuccess, getAwardEndorsementEngagementError
} from "@/redux/awards/action-reducer.js";
import conn from "@/lib/connnection.js";

function* getAwardEndorsementEngagementInfo() {
    try {
        const state = yield select();
        const accountId = state.profile.accountId;
        const soql = `SELECT Id, Endorsement__r.Name, Endorsement__r.Date__c, Endorsement__r.EngagementType__c, Endorsement__r.SkillsId__r.PointEarned__c, Endorsement__r.AccountId__r.Name, AccountId__r.TotalPoints__c FROM AchievedAwards__c WHERE AccountId__c = '${accountId}' ORDER BY CreatedDate DESC`;
        const response = yield conn.query(soql);
        let awardEndorsementEngagement = [];
        if (response.done) {
            awardEndorsementEngagement = response.records.map(rec => ({
                engagementWith: rec?.Endorsement__r?.AccountId__r?.Name || '',
                date: rec.Endorsement__r?.Date__c,
                time: rec.Endorsement__r?.Date__c,
                engagementType: rec.Endorsement__r?.EngagementType__c || '',
                pointsEarned: rec.Endorsement__r?.SkillsId__r?.PointEarned__c || 0,
                totalPoints: rec.AccountId__r?.TotalPoints__c || 0
            }));
        }
        yield put(getAwardEndorsementEngagementSuccess(awardEndorsementEngagement));
    } catch (e) {
        yield put(getAwardEndorsementEngagementError(e));
    }
}

export function* watchGetAwardEndorsementEngagement() {
    yield takeLatest(getAwardEndorsementEngagement.type, getAwardEndorsementEngagementInfo);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetAwardEndorsementEngagement),
    ])
}
