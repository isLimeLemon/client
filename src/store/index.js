import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer'

const persistConfig = {
  key: 'authType',
  storage: storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger];

const store = configureStore({
  reducer:pReducer,
  middleware:middleware
})

const persistor = persistStore(store);

export { persistor, store };