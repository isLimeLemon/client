import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    getProductsInProgress:false,
    getProductsSuccess:false,
    getProductsFail:false,
    list:[]
}

const reducer = handleActions({
    [types.getPoductsInProgress]:(state)=>({
        ...state,
        getProductsInProgress:true,
        getProductsSuccess:false,
        getProductsFail:false
    }),
    [types.getPoductsSuccess]:(state,action) => ({
        ...state,
        getProductsInProgress:false,
        getProductsSuccess:true,
        getProductsFail:false,
        list:action.payload
    }),
    [types.getPoductsFail]:(state)=>({
        ...state,
        getProductsInProgress:false,
        getProductsSuccess:false,
        getProductsFail:true,
    })
},initialState)

export default reducer