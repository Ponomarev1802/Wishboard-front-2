import {
    GET_USER_SUCCESS,
    LOGOUT_USER_SUCCESS

} from "../actions/userActions";

export const initialState = {
    auth: true,
    init: true,
    wish_form: false,
    wish_form_state: {}
};

export function appReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_USER_SUCCESS:
            return {...state, auth: payload.success};
        case LOGOUT_USER_SUCCESS:
            return {...state, auth: false};
        case 'TOGGLE_WISH_FORM':
            return {...state, wish_form: !state.wish_form};
        case 'SET_WISH_FORM':
            return {...state, wish_form_state: payload};
        default:
            return state;
    }
}
