import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://collabbed-api.codeondeck.com'


export const searchCollaborations = (params) => {
    const config = {
        headers: {
            'Authorization': localStorage.getItem("token")
        },
        params
    }

    return dispatch => {
        axios
            .get(`${url}/search/collaborations`, config)
            .then(res => {
                const {
                    data
                } = res.data;
                dispatch(searchCollaborationsSuccess(data));
                console.log(res)
                console.log(data)
            })
            .catch(res => {
                const { response } = res;

                response && dispatch(searchCollaborationsFail(response.data.message))

                // dispatch(searchCollaborationsFail(message))
                console.log({ res })
                // console.log(res.response.data.message)
            })
    }
}

export const searchCollaborationsSuccess = (data) => ({
    type: actionTypes.SEARCH_COLLABORATIONS_SUCCESS,
    collaborations: data
});
export const searchCollaborationsFail = (message) => ({
    type: actionTypes.SEARCH_COLLABORATIONS_FAIL,
    errorMessage: message
});
