import { createAction } from "redux-actions";
import { API } from "../Api";

export const types = {
    getPoductsInProgress:"getPoductsInProgress",
    getPoductsSuccess:"getPoductsSuccess",
    getPoductsFail:"getPoductsFail"
}

const getPoductsInProgress = createAction(types.getPoductsInProgress)
const getPoductsSuccess = createAction(types.getPoductsSuccess)
const getPoductsFail = createAction(types.getPoductsFail)

const loadProducts = () => {
    return (dispatch, getState,api)=>{
        dispatch(getPoductsInProgress())

        return API.PRODUCTS.get()
        .then(res=>{
            dispatch(getPoductsSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getPoductsFail(err))
        })

    }
}

export default {
    loadProducts
}