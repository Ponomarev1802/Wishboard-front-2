import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,

} from "../actions/userActions";

export const initialState = {

};

export function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_USER_REQUEST:
            //alert('Запрос');
            return state;
        case GET_USER_SUCCESS:
            //alert('Запрос');
            return {...state, state: payload.user};
        default:
            return state;
    }
}
