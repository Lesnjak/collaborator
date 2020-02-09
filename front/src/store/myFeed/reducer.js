import * as actionTypes from './actionTypes';


const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_GET_ALL_CARDS:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
