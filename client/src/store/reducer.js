import { combineReducers } from "redux";
import sesisonReducer from './session/reducer'

export default combineReducers({
    session:sesisonReducer
})