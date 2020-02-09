import * as actionTypes from './actionTypes';


const reducer = (state = [], action) => {
    switch (action.type) {
        // case actionTypes.SET_ALL_COLLABORATIONS:
        //     return [...action.payload];

        case actionTypes.POST_COLLABORATION:
            console.log("Reducer state = ", state, "Payload = ", action.payload);

            // return action.payload;
            return [...state, action.data.newCollaboration];

        case actionTypes.PUT_COLLABORATION:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;