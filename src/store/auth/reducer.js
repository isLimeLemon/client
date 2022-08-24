import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    token:''
}

const reducer = handleActions({
    [types.saveAuth]:(state,action) => ({
        token:action.payload
    }),
    [types.removeAuth]:(state)=>({
        token:''
    })
},initialState)

export default reducer