import { SIGNUP_REQ } from '../actions/signupReq';

const initialState = {
    user: []
}

export const userSignupReq = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQ:
            return Object.assign({}, state, { user: action.payload})
    
        default:
            return state
    }
}