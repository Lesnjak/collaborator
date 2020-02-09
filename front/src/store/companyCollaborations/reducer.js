import * as actionTypes from './actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_COLLABORATIONS:
            return [...action.payload];
        case actionTypes.ADD_COLLABORATION:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default reducer;
