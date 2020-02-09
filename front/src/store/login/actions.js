import * as actionTypes from './actionTypes';
import axios from 'axios';
import {setCollaborations} from "../companyCollaborations/actions";
import {setCollaborationToFavorite} from "../favoriteCollaborations/actions";
import {setCompany} from "../company/actions";

const url = 'https://collabbed-api.codeondeck.com'

export const login = ({email, password}) => {
    console.log({email}, {password})
    return dispatch => {
        axios
            .post(`${url}/login`, {email, password})
            .then(res => {
                const {token, user} = res.data.data;
                // dispatch(loginSuccess(user, token));
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))
                console.log({res})
                const company = res.data.data.user.companies[0];
                const collaborations = res.data.data.user.companies[0].collaborations;
                console.log("Q = ", collaborations);
                dispatch(setCollaborations(collaborations));
                dispatch(setCollaborationToFavorite(company.favouriteCollaborations));
                dispatch(setCompany(company));
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

// {res: {…}}
// res:
//     config: {url: "http://collabbed-api.codeondeck.com/login", method: "post", data: "{"email":"a.harper@randatmail.com","password":"123456"}", headers: {…}, transformRequest: Array(1), …}
// data:
//     data:
//         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDk1MjI3MmJlYmVmMGYzYTliNTBiZSIsImlhdCI6MTU2OTA5Nzk2N30.sw9fQ3PUO4zPbvsq2anL7zXxq9FeNW7dxCK0pP9ycJE"
// user:
//     companies: Array(1)
// 0:
// address1: "Ap #689-1483 Eu Rd."
// archivedDate: "2019-09-11T16:04:25.524Z"
// businessFocus: (2) [{…}, {…}]
// businessType: []
// city: "Beverley"
// collaborationInterests: []
// collaborations: (16) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// contactDetails: [{…}]
// country: {id: 0, label: "United Kingdom"}
// createdDate: "2019-08-06T10:10:47.641Z"
// entityType: "RC"

export const loginSuccess = (user, token) => ({
    type: actionTypes.LOGIN_SUCCESS,
    user,
    token
});

export const logout = () => ({
    type: actionTypes.LOGOUT,
});

