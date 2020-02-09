import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = 'https://collabbed-api.codeondeck.com'

export const getDataset = (params) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
    }
    return dispatch => {
        console.log('from axios', {config}, {params})
        axios
            .get(`${url}/dataset`, params, config)
            .then(res => {
                // dispatch(putCompanyDataSuccess(res.data.data));
                dispatch(addDataset(res.data));
                console.log("datasets = ", {res})
            })
            .catch(err => {
                console.log("datasets = ", {err})
                console.log(err.message)
            })
    }
}

export const addDataset = (data) => ({
    type: actionTypes.ADD_DATASET,
    payload: data
});