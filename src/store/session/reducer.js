import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    validSession:false,
    loginInProgress:false,
    loginSuccess:false,
    loginFailed:false,
    apiErrors:null
}

const reducer = handleActions({
    [types.logOut]:state =>({
        ...initialState
    }),
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
        validSession:false,
        apiErrors:action.payload
    }),
    [types.loginSuccess]:(state, action) =>{
        return {
            ...state,
            loginInProgress:false,
            loginSuccess:true,
            loginFailed:false, 
            user:action.payload,
            validSession:true
        }
    },
    [types.logInByTokenSuccess]:(state, action) => ({
        ...state,
        loginInProgress:false,
        loginSuccess:true,
        loginFailed:false, 
        user:action.payload,
        validSession:true
    })

},initialState)

export default reducer