import {
    GET_USER_SUCCESS,
    LOGOUT_USER_SUCCESS

} from "../actions/userActions";

export const initialState = {
    auth: false,
    init: true
};

export function appReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_USER_SUCCESS:
            return payload.status;
        case LOGOUT_USER_SUCCESS:
            return {...state, auth: false}
        default:
            return state;
    }
}
