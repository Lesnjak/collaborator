import * as actionTypes from './actionTypes';

const initialState = {}

const reducer = (state = initialState, action) => {
    console.log("Reached", action);
    switch (action.type) {
        case actionTypes.ADD_DATASET:
            console.log("ACTION = ", action);

            return {...state, ...action.payload};
        default:
            console.log("Reached", action);
            return state;
    }
};

export default reducer;
