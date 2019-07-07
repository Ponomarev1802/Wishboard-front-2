export const
    GET_WISH_REQUEST = "GET_WISH_REQUEST",
    GET_WISH_SUCCESS = "GET_WISH_SUCCESS";


export const wishRequest = (id) => {
    return dispatch => {
        dispatch({
            type: GET_WISH_REQUEST
        });
        fetch('/wishes')
            .then(res => res.json())
            .then(res => dispatch({type: GET_WISH_SUCCESS, payload: res}))
            .catch(err => console.log(err))
    };
};

export const toggleWishForm = (formState) => {
  return dispatch => {
      dispatch({
          type: 'TOGGLE_WISH_FORM'
      });
      dispatch({
          type: 'SET_WISH_FORM',
          payload: formState
      })

  }
};