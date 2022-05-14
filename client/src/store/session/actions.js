import { createAction } from "redux-actions";

export const types = {
    loginInProgress:"logginInProgres",
    loginSuccess:"loginSuccess",
    loginFailed:"loginFailer"
}

const loginInProgress = createAction(types.loginInProgress)
const loginSuccess = createAction(types.loginSuccess)
const loginFailed = createAction(types.loginFailed)

const logIn = (userName, password) => {
    return (dispatch, getState,api)=>{
        dispatch(loginInProgress())
        
        return Promise.resolve()
        //login logic
    }
}

export default {
    logIn
}