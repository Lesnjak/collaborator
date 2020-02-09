import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = 'https://collabbed-api.codeondeck.com'

export const addCollaborationToFavorite = (companyId, collaborationId) => {
    console.log("Hello");

    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    }

    const data = {
        companyId,
        collaborationId,
        add: true
    };
    return dispatch => {

        console.log(data);

        axios.put(`${url}/company/collaboration-favourites`, data, config)
            .then(res => {
                console.log(res);
                dispatch(setCollaborationToFavorite(res.data.data));
                // console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

export const removeCollaborationFromFavorite = (companyId, collaborationId) => {
    console.log("Hello");

    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    }

    const data = {
        companyId,
        collaborationId,
        add: false
    };

    console.log(data);
    return dispatch => {

        axios.put(`${url}/company/collaboration-favourites`, data, config)
            .then((res) => {
                dispatch(setCollaborationToFavorite(res.data.data));
                console.log("Remove Res = ", res)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

export const setCollaborationToFavorite = (data) => ({
    type: actionTypes.SET_COLLABORATION_TO_FAVORITE,
    payload: data
});

