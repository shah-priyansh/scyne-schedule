import { combineReducers } from "redux";

import error from "./error/action-reducer.js";
import profile from "./profile/action-reducer.js";

const combinedReducers = combineReducers({
    profile,
    error
});

const reducers = (state, action) => {
    return combinedReducers(state, action);
}
export default reducers;
