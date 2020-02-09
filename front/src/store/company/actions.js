import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://collabbed-api.codeondeck.com'

export const setCompany = (company) => ({
    type: actionTypes.SET_COMPANY,
    payload: company
});

export const putCompanyData = (params) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }
    return dispatch => {
        console.log('from axios', {config}, {params})
        axios
            .put(`${url}/company`, params, config)
            .then(res => {
                dispatch(putCompanyDataSuccess(res.data.data));
                console.log({res})
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const putCompanyDataSuccess = (data) => ({
    type: actionTypes.PUT_COMPANY_DATA_SUCCESS,
    payload: data
});


export const postCompanyData = (params) => {
    return dispatch => {
        console.log({params})
        axios
            .post(`${url}/company`, params)
            .then(res => {
                dispatch(postCompanyDataSuccess(res.data));
                console.log('success', {res})
            })
            .catch(err => {
                dispatch(postCompanyDataFail(err.message));
                console.log('fail', err.message)
            })
    }
}
export const postCompanyDataSuccess = (data) => ({
    type: actionTypes.POST_COMPANY_DATA_SUCCESS,
    postCompanyData: data
})
export const postCompanyDataFail = (err) => ({
    type: actionTypes.POST_COMPANY_DATA_FAIL,
    failMessage: err
})


export const postCompanyLogo = (formData, companyId) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'content-type': 'multipart/form-data'
        }
    }

    return dispatch => {
        axios
            .post(`${url}/company/${companyId}/logo-image`, formData, config)
            .then(res => {
                dispatch(postCompanyLogoSuccess(res.data.data));
                console.log({res})
            })
    }
}


export const postCompanyLogoSuccess = (data) => ({
    type: actionTypes.POST_COMPANY_LOGO_SUCCESS,
    payload: data
})


export const archiveCompany = (companyId, archivedReason) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    }

    return dispatch => {
        console.log('from axios', config)
        axios
            .put(`${url}/company/archive`, {companyId, archivedReason}, config)
            .then(res => {
                dispatch(archiveCompanySuccess(res.message));
                console.log({res})
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const archiveCompanySuccess = (message) => ({
    type: actionTypes.ARCHIVE_COMPANY_SUCCESS,
    payload: message
})


export const unarchiveCompany = (companyId) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    }

    return dispatch => {
        console.log('from axios', config)
        axios
            .put(`${url}/company/unarchive`, {companyId}, config)
            .then(res => {
                dispatch(unarchiveCompanySuccess(res.message));
                console.log({res})
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export const unarchiveCompanySuccess = (message) => ({
    type: actionTypes.ARCHIVE_COMPANY_SUCCESS,
    payload: message
})
