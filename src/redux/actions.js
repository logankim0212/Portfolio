import {
    ENABLE_LOADING,
    DISABLE_LOADING,
    FETCH_LOADING
} from './actionTypes';

export const fetchLoading = () => dispatch => {
    dispatch({
        type: FETCH_LOADING
    })
};

// export const fetchLoading = () => ({
//     type: FETCH_LOADING,
//     payload: loadingStatus
// });

export const enableLoading = () => ({
    type: ENABLE_LOADING
});

export const disableLoading = () => ({
    type: DISABLE_LOADING
});
