import {ENABLE_LOADING, DISABLE_LOADING, FETCH_LOADING} from '../actionTypes';

const initialState = {
    loading: false
};

export default function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOADING:
            console.log('FETCH_LOADING');

            return {
                ...state,
                loading: state.loading
            };
        case ENABLE_LOADING:
            console.log('ENABLE_LOADING');

            return {
                ...state,
                loading: true
            };
        case DISABLE_LOADING:
            console.log('DISABLE_LOADING');

            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
