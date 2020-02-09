import * as actionTypes from './actionTypes';

const initialState = {
    collaborations: [],
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_COLLABORATIONS_SUCCESS:
            return {
                ...state,
                collaborations: action.collaborations,
                errorMessage: ''
            };

        case actionTypes.SEARCH_COLLABORATIONS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                collaborations: []
            };

        default:
            return state;
    }
};

export default reducer;