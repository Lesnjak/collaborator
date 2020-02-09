import * as actionTypes from './actionTypes';

const initialState = {
    success: false,
    message: '',
    verifyUser: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_DATA:
            return action.payload;

        case actionTypes.REQUEST_PASSWORD_RESET:
            return {
                ...state,
                message: action.payload
            }

        case actionTypes.MESSAGE_RESET:
            return {
                ...state,
                message: ''
            }

        case actionTypes.VERIFY_USER:
            console.log("VF = ", action.payload);
            return {
                ...state,
                success: action.payload.success,
                message: action.payload.message,
                // verifyUser: {
                //     message: action.payload
                // }
            }
        // return {
        //     ...state,
        //     verifyUser: action.payload
        // }

        case actionTypes.VERIFY_USER_FAIL:
            console.log("VF = ", action.payload);

            return {
                ...state,
                success: action.payload.success,
                message: action.payload.message,
                // verifyUser: {
                //     message: action.payload
                // }
            }

        default:
            return state;
    }
};

export default reducer;
