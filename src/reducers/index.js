import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profile';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  profile: ProfileReducer,
});

export default rootReducer;
