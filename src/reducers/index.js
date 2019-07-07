import {combineReducers} from 'redux'
import {appReducer} from "./appReducer";
import {userReducer} from "./userReducer";
import {wishReducer} from "./wishReducer";


const initialState = {};

export const rootReducer = combineReducers({
    initialState,
    user: userReducer,
    wishes: wishReducer,
    app: appReducer,

});