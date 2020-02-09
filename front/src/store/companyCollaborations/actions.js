import * as actionTypes from "./actionTypes";

export const setCollaborations = (data) => ({
    type: actionTypes.SET_COLLABORATIONS,
    payload: data
});

export const addCollaboration = (data) => ({
    type: actionTypes.ADD_COLLABORATION,
    payload: data
});