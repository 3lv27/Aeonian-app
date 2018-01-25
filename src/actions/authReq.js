import axios from 'axios';
import * as AuthActionTypes from '../actiontypes/auth';


export const userSignReq = userData => (
    (dispatch, getState) => {
        axios.post('http://localhost:3000/signup/', userData)
            .then((response) => 
            {
            console.log(response);
            dispatch({type: AuthActionTypes.SIGNUP_REQ, payload: response.data})
            }
        )
    }
)

export const userLogReq = userData => (
    (dispatch, getState) => {
        axios.post('http://localhost:3000/login/', userData)
            .then((response) => {
                console.log(response);
                dispatch({ type: AuthActionTypes.LOGIN_REQ, payload: response.data })
            }
            )
    }
)

