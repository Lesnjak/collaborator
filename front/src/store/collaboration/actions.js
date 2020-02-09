import * as actionTypes from './actionTypes';
import axios from 'axios';
import {addCollaboration, setCollaborations} from "../companyCollaborations/actions";

const url = 'https://collabbed-api.codeondeck.com'


export const postCollaboration = (data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
    }

    console.log("DATA = ", data);

    return dispatch => {
        axios
            .post(`${url}/collaboration`, data, config)
            .then(res => {
                const {
                    data
                } = res;
                // dispatch(postCollaborationRequest(data));
                console.log("C = ", data.data.newCollaboration);
                dispatch(addCollaboration(data.data.newCollaboration));
                console.log(res)
            })
            .catch(res => {
                console.log({res})
                // dispatch(postCollaborationRequest(res))
            })
    }
}
export const postCollaborationRequest = (data) => ({
    type: actionTypes.POST_COLLABORATION,
    payload: data
});


export const putCollaboration = (data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        // params: {
        //     comapnyId, //: (string, required)
        //     collaborationId, //: (string, required)
        //     category, //: ({id: ,label: })
        //     type, //: ({id: ,label: })
        //     description //: (string)
        // }
    }

    return dispatch => {
        axios
            .put(`${url}/collaboration`, data, config)
            .then(res => {
                const {
                    data
                } = res;
                console.log("Data", data);
                dispatch(putCollaborationSuccess(data));
                dispatch(setCollaborations(data.data.companyCollaborations[0]));
                console.log(res)
            })
            .catch(err => {
                console.log({err})
            })
    }
}
export const putCollaborationSuccess = (data) => ({
    type: actionTypes.PUT_COLLABORATION,
    payload: data
});


export const deleteCollaboration = (data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
    }

    return dispatch => {
        axios
            .post(`${url}/collaboration`, data, config)
            .then(res => {
                const {
                    data
                } = res;
                dispatch(deleteCollaborationRequest(data));
                console.log(res)
            })
            .catch(res => {
                console.log({res})
                dispatch(deleteCollaborationRequest(res))
            })
    }
}
export const deleteCollaborationRequest = (data) => ({
    type: actionTypes.DELETE_COLLABORATION,
    payload: data
});
