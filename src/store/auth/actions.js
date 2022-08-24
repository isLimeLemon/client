import { createAction } from "redux-actions";

export const types = {
    saveAuth:"saveAuth",
    removeAuth:"removeAuth"
}

const saveAuth = createAction(types.saveAuth)
const removeAuth = createAction(types.removeAuth)

const saveAuthorization = (token) => {
    return (dispatch, getState,api)=>{
        dispatch(saveAuth(token))
        return Promise.resolve()
    }
}

const removeAuthorization = (token) => {
    return (dispatch, getState,api)=>{
        dispatch(removeAuth())
        return Promise.resolve()
    }
}


export default {
    saveAuthorization,
    saveAuthorization,
    removeAuthorization
}