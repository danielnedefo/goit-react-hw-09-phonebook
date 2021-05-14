import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import logger from 'redux-logger'
import contactreducer from '../redux/contacts/contact-reducer'

console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions:[FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER]
  }
}),logger]

const store = configureStore({
  reducer: {
      contacts:contactreducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware
})
const persistor = persistStore(store)

export default {store,persistor}