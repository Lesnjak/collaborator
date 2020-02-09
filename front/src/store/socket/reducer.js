import * as actionTypes from './actionTypes';

const initialState = {
    loaded: false,
    message: 'Just created',
    connected: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SOCKETS_CONNECTING:
            return {
                ...state,
                loaded: true,
                message: 'Connecting...',
                connected: false
            };
        case actionTypes.SOCKETS_DISCONNECTING:
            return {
                ...state,
                loaded: true,
                message: 'Disconnecting...',
                connected: true
            };
        case actionTypes.SOCKETS_MESSAGE_SENDING:
            return {
                ...state,
                loaded: true,
                message: 'Send message',
                connected: true
            };
        case actionTypes.SOCKETS_MESSAGE_RECEIVING:
            return {
                ...state,
                loaded: true,
                message: 'Message receive',
                connected: true
            };
        default:
            return state;
    }
}

export default reducer