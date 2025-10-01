
import {
  USER_ACCOUNT_INFO
} from '../actions/profile';

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    
    case USER_ACCOUNT_INFO://check email verification token
    return { ...state, user: null, status:'USER_ACCOUNT_INFO', error:null, loading: true};
    
    default:
    return state;
  }
}
