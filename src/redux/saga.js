import { all } from "redux-saga/effects";

import profileSaga from "./profile/saga.js";

export default function* rootSaga() {
    yield all([
        profileSaga(),
    ])
}
