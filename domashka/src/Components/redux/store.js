import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import contactreducer from '../redux/contacts/contact-reducer'
import authReducer from './auth/auth-reducer'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions:[FLUSH,REHYDRATE,REGISTER,PURGE,PAUSE,PERSIST]
  }
}),logger]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
}
const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist:['item']
}

const store = configureStore({
  reducer: {
    contacts:persistReducer(contactsConfig,contactreducer),
    auth:persistReducer(authPersistConfig,authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware
})

const persistor = persistStore(store)

export default {
  store,
  persistor
}