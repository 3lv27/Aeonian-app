import axios from 'axios';

export const userSignReq = userData => (
    (dispatch, getState) => {
        axios.post('http://localhost:3000/signup/', userData)
            .then((response) => 
            {
            console.log(response);
            dispatch({type: SIGNUP_REQ, payload: response.data})
            }
        )
    }
)

export const SIGNUP_REQ = 'SIGNUP_REQ';