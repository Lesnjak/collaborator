import * as actionTypes from './actionTypes';
import axios from 'axios';

const url = 'https://collabbed-api.codeondeck.com';

export function socketsConnecting() {
    return { type: actionTypes.SOCKETS_CONNECTING };
}
export function socketsDisconnecting() {
    return { type: actionTypes.SOCKETS_DISCONNECTING };
}
export function socketsMessageSending() {
    return { type: actionTypes.SOCKETS_MESSAGE_SENDING };
}
export function socketsMessageReceiving() {
    return { type: actionTypes.SOCKETS_MESSAGE_RECEIVING };
}



// export const putCompanyData = (params) => {
//     const config = {
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem("token")}`
//         },
//     }

//     return dispatch => {
//         console.log('from axios', config)
//         axios
//             .put(`${url}/company`, params, config)
//             .then(res => {
//                 dispatch(putCompanyDataSuccess(res.data.data));
//                 console.log({ res })
//             })
//             .catch(err => {
//                 console.log(err.message)
//             })
//     }
// }
// export const putCompanyDataSuccess = (data) => ({
//     type: actionTypes.PUT_COMPANY_DATA_SUCCESS,
//     payload: data
// });


