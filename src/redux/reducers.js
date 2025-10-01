import {combineReducers} from "redux";

import profile from "./profile/action-reducer.js";
import skills from "./skills/action-reducer.js";
import awards from "./awards/action-reducer.js";
import endorsements from "./endorsements/action-reducer.js";
import qualifications from "./qualifications/action-reducer.js";
import roles from "./roles/action-reducer.js";
import error from "./error/action-reducer.js";

const combinedReducers = combineReducers({
    profile,
    skills,
    awards,
    endorsements,
    qualifications,
    roles,
    error
});

const reducers = (state, action) => {
    return combinedReducers(state, action);
}
export default reducers;
