import { createAction } from "redux-actions";

export const types = {
    AppHasBooted:"AppHasBooted",
}

const AppHasBooted = createAction(types.AppHasBooted)

const bootApp = () => {
    return (dispatch, getState,api)=>{
        dispatch(AppHasBooted)
        return Promise.resolve()
    }
}

export default {
    bootApp
}