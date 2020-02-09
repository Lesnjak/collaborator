import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://collabbed-api.codeondeck.com'


export const searchCompanies = (params) => {
    const config = {
        headers: {
            'Authorization': localStorage.getItem("token")
        },
        params
    }
    console.log(config)
    return dispatch => {
        axios
            .get(`${url}/search/companies`, config)
            .then(res => {
                const {
                    data
                } = res.data;
                dispatch(searchCollaborationsSuccess(data));
                console.log(res)
            })
            .catch(res => {
                console.log({ res })
            })
    }
}
export const searchCollaborationsSuccess = (companies) => ({
    type: actionTypes.FETCH_SEARCH_COMPANIES,
    payload: companies
});