import { combineReducers } from "redux";
import sesisonReducer from './session/reducer'
import appReducer from './application/reducer'
import productsReducer from './products/reducer'
import authReducer from './auth/reducer'

export default combineReducers({
    application:appReducer,
    auth:authReducer,
    session:sesisonReducer,
    products:productsReducer
})