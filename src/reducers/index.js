import { combineReducers } from 'redux';
import { userAuthReq } from './user';

const rootReducer = combineReducers({
    user: userAuthReq
})

export default rootReducer