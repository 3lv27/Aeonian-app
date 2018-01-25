import * as AuthActionTypes from '../actiontypes/auth';

const initialState = {
    user: []
}

export const userAuthReq = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.SIGNUP_REQ:
            return Object.assign({}, state, { user: action.payload})

        case AuthActionTypes.LOGIN_REQ:
            return Object.assign({}, state, { user: action.payload })

        default:
            return state
    }
}