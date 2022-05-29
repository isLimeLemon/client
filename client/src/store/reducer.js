import { combineReducers } from "redux";
import sesisonReducer from './session/reducer'
import appReducer from './application/reducer'

export default combineReducers({
    session:sesisonReducer,
    aplication:appReducer
})