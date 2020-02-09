import * as actionTypes from './actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_COMPANIES:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;