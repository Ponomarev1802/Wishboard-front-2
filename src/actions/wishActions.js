export const
    GET_WISH_REQUEST = "GET_WISH_REQUEST",
    GET_WISH_SUCCESS = "GET_WISH_SUCCESS"

;






export const wishRequest = (id) =>{
    return dispatch => {
        dispatch({
            type: GET_WISH_REQUEST
        });
        fetch('/wish')
            .then(res => res.json())
            .then(res => dispatch({type: GET_WISH_SUCCESS, payload: res.wishes}))
            .catch(err => console.log(err))

    };
};