import { createAction } from "redux-actions";
import { API } from "../Api";

export const types = {
    loginInProgress:"logginInProgres",
    loginSuccess:"loginSuccess",
    loginFailed:"loginFailer",
    //---------------------
    logOut:"logOut"
}

const loginInProgress = createAction(types.loginInProgress)
const loginSuccess = createAction(types.loginSuccess)
const loginFailed = createAction(types.loginFailed)

const logOutAction = createAction(types.logOut)


const logIn = (userName, password) => {
    return (dispatch, getState,api)=>{
        dispatch(loginInProgress())
        
        return API.SESSION.logIn({userName,password}).then((res)=>{
            dispatch(loginSuccess(res))
        }).catch((err)=>{
            dispatch(loginFailed(err))
        })
        //login logic
    }
}

const logOut = () => {
    return (dispatch, getState, api)=>{
        dispatch(logOutAction())

        return Promise.resolve()
    }
}

export default {
    logIn
}