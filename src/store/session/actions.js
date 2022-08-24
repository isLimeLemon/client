import { createAction } from "redux-actions";
import authActions from "../auth/actions"
import { API } from "../Api";

export const types = {
    loginInProgress:"logginInProgres",
    loginSuccess:"loginSuccess",
    loginFailed:"loginFailed",
    //---------------------
    logInByTokenInProgres:"logInByTokenInProgres",
    logInByTokenSuccess:"logInByTokenInSuccess",
    logInByTokenFailed:"logInByTokenFailed",
    //---------------------
    logOut:"logOut"
}

const loginInProgress = createAction(types.loginInProgress)
const loginSuccess = createAction(types.loginSuccess)
const loginFailed = createAction(types.loginFailed)

const logInByTokenInProgres = createAction(types.logInByTokenInProgres)
const logInByTokenSuccess = createAction(types.logInByTokenSuccess)
const logInByTokenFailed = createAction(types.logInByTokenFailed)

const logOutAction = createAction(types.logOut)


const logIn = (userName, password) => {
    return (dispatch, getState,api)=>{
        dispatch(loginInProgress())
        
        return API.SESSION.logIn({userName,password}).then((res)=>{
            dispatch(loginSuccess(res.data))
            dispatch(authActions.saveAuthorization(res.data.token))
        }).catch((err)=>{
            dispatch(loginFailed(err))
        })
    }
}

const tryLoginByToken = () => {
    return (dispatch, getState, api) => {
        dispatch(logInByTokenInProgres())

        return API.SESSION.logInByToken()
            .then((res)=>{
                const { data } = res
                dispatch(logInByTokenSuccess(data))
            }).catch((err)=>{
                dispatch(logInByTokenFailed(err))
            })
    }
}

const logOut = () => {
    return (dispatch, getState, api)=>{
        dispatch(logOutAction())

        return Promise.resolve()
    }
}

export default {
    logIn,
    logOut,
    tryLoginByToken
}