export const
    GET_USER_REQUEST = "GET_USER_REQUEST",
    GET_USER_SUCCESS = "GET_USER_SUCCESS",
    LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST",
    LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS"

;






export const userRequest = (id) =>{
    return dispatch => {
        dispatch({
            type: GET_USER_REQUEST
        });
        fetch('/user')
            .then(res => res.json())
            .then(res => dispatch({type: GET_USER_SUCCESS, payload: res}))
            .catch(err => console.log(err))

    };
};

export const userLogout = () =>{
    return dispatch => {
        dispatch({
            type: LOGOUT_USER_REQUEST
        });
        fetch('/logout', {method: "POST", body: "{}"})
            .then(res => res.json())
            .then(res => dispatch({type: LOGOUT_USER_SUCCESS, payload: res}))
            .catch(err => console.log(err))
    };
};