import {
    GET_WISH_REQUEST,
    GET_WISH_SUCCESS,

} from "../actions/wishActions";

export const initialState = [];

export function wishReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_WISH_REQUEST:
            //alert('Запрос');
            return state;
        case GET_WISH_SUCCESS:
            return payload;
        default:
            return state;
    }
}

