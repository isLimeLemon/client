import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    token:null,
    loginInProgress:false,
    loginSuccess:false,
    loginFailed:false,
    apiErrors:null
}

const reducer = handleActions({
    [types.loginInProgress]:state => ({
        ...state,
        loginInProgress:true,
        loginSuccess:false,
        loginFailed:false  
    }),
    [types.loginFailed]:(state, action) => ({
        ...state,
        loginInProgress:false,
        loginSuccess:false,
        loginFailed:true, 
        apiErrors:action.payload
    }),
    [types.loginFailed]:(state, action) => ({
        ...state,
        loginInProgress:false,
        loginSuccess:true,
        loginFailed:false, 
        token:action.payload
    }),

},initialState)

export default reducer