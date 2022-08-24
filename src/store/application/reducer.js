import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    appHasBooted:false,
}

const reducer = handleActions({
    [types.AppHasBooted]:state => ({
        ...state,
        appHasBooted:true
    })
},initialState)

export default reducer