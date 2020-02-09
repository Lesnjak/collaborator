import * as actionTypes from './actionTypes';

const initialState = {
    user: {},
    token: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log('USER = ', action.user);
            return {
                ...state,
                user: action.user,
                token: action.token
            };

        case actionTypes.LOGOUT:
            console.log('USER = ', action.user);
            return {};

        default:
            return state;
    }
};

export default reducer;