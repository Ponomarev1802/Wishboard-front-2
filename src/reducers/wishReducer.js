import {
    GET_WISH_REQUEST,
    GET_WISH_SUCCESS,

} from "../actions/wishActions";

export const initialState = [];

export function wishReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_WISH_REQUEST:
            return state;
        case GET_WISH_SUCCESS:
            return payload.result;
        default:
            return state;
    }
}

