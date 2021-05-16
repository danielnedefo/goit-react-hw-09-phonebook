import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import contactreducer from '../redux/contacts/contact-reducer'

console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware(),logger]

const store = configureStore({
  reducer: {
      contacts:contactreducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware
})

export default store