import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const middleware = [createLogger(), thunk]
const store = configureStore({
  reducer:rootReducer,
  middleware:middleware
})

export default store