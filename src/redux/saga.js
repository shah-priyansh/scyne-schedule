import {all} from "redux-saga/effects";

import profileSaga from "./profile/saga.js";
import skillSaga from "./skills/saga.js";
import awardsSaga from "./awards/saga.js";
import endorsementsSaga from "./endorsements/saga.js";
import qualificationsSaga from "./qualifications/saga.js";
import rolesSaga from "./roles/saga.js";

export default function* rootSaga() {
    yield all([
        profileSaga(),
        skillSaga(),
        awardsSaga(),
        endorsementsSaga(),
        qualificationsSaga(),
        rolesSaga()
    ])
}
