import * as actionTypes from './actionTypes';

const initialState = {
    successMessage: '',
    postCompanyData: {},
    failMessage: '',
    company: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COMPANY:
            return {
                ...state,
                company: action.payload
            }

        case actionTypes.PUT_COMPANY_DATA_SUCCESS:
            return {
                ...state
            };



        case actionTypes.POST_COMPANY_DATA_SUCCESS:
            return {
                ...state,
                postCompanyData: action.postCompanyData,
                failMessage: ''
            };

        case actionTypes.POST_COMPANY_DATA_FAIL:
            return {
                ...state,
                failMessage: action.failMessage,
                successMessage: ''
            };


        case actionTypes.POST_COMPANY_LOGO_SUCCESS:
            return state;

        case actionTypes.ARCHIVE_COMPANY_SUCCESS:
            return {
                ...state,
            };;

        case actionTypes.UNARCHIVE_COMPANY_SUCCESS:
            return {
                ...state,
            };;

        default:
            return state;
    }
};

export default reducer;
