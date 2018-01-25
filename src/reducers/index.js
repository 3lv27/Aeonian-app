import { combineReducers } from 'redux';
import { userSignupReq } from './user';

const rootReducer = combineReducers({
    user: userSignupReq
})

export default rootReducer