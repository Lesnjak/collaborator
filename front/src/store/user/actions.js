import * as actionTypes from './actionTypes';
import axios from 'axios';


const url = 'https://collabbed-api.codeondeck.com'


export const fetchUserData = (data) => ({
    type: actionTypes.FETCH_USER_DATA,
    payload: data
});



export const verifyUser = (verificationCode) => {
    const token = localStorage.getItem('token');

    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }

    return dispatch => {
        console.log('from axios', { verificationCode }, { config })
        axios
            .get(`${url}/user/verify/${verificationCode}`, config)
            .then(res => {
                const { data } = res;
                dispatch(verifySuccess(data));
                console.log({ res })
            })
            .catch(err => {
                // dispatch(verifyFail(err.message))
                dispatch(verifyFail(err.response.data))
                console.log({ err })
            })
    }
}
export const verifySuccess = (data) => ({
    type: actionTypes.VERIFY_USER,
    payload: data
})
export const verifyFail = (message) => ({
    type: actionTypes.VERIFY_USER_FAIL,
    payload: message
})



export const requestNewVerificationCode = (email) => {

    return dispatch => {
        console.log('from axios', { email })
        axios.post(`${url}/user/request-new-verification-code`, { email })
            .then(res => {
                dispatch(requestNewVerificationCodeSuccess(res));
                console.log({ res })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const requestNewVerificationCodeSuccess = (data) => ({
    type: actionTypes.RESET_VERIFY_CODE,
    payload: data
})



export const requestPasswordReset = (email) => {
    console.log(email)

    return dispatch => {
        console.log('from axios', email)
        axios
            .post(`${url}/user/request-password-reset/`, { email })
            .then(res => {
                dispatch(requestPasswordResetSuccess(res.data.message));
                console.log(res.data.message)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const requestPasswordResetSuccess = (message) => ({
    type: actionTypes.REQUEST_PASSWORD_RESET,
    payload: message
})




export const resetPassword = (code, newPassword) => {

    return dispatch => {
        console.log('from axios', { code, newPassword })
        axios
            .post(`${url}/user/reset-password/`, { code, newPassword })
            .then(res => {
                dispatch(resetPasswordSuccess(res.message));
                console.log({ res })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const resetPasswordSuccess = (message) => ({
    type: actionTypes.RESET_PASSWORD,
    payload: message
})


export const messageReset = () => ({
    type: actionTypes.MESSAGE_RESET
})
