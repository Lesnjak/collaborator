import * as actionTypes from './actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_COLLABORATION_TO_FAVORITE:
            console.log(action.payload);

            return [...action.payload];

        default:
            return state;
    }
};

export default reducer;
