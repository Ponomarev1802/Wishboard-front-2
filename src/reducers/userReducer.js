import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,

} from "../actions/userActions";

export const initialState = {

};

export function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_USER_REQUEST:
            return state;
        case GET_USER_SUCCESS:
            return payload.result;
        default:
            return state;
    }
}
