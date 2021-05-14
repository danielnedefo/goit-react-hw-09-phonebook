import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './contact-action'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist:'filter'
}

const item = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => {
    const contacts = state
    contacts.splice(payload, 1)
    return contacts
  }
})
const filter = createReducer('', {
  [filterContact]:(_, { payload }) => payload
})
 const rootReducer =  combineReducers({
  item,
  filter
 })

const persistedReducer = persistReducer(persistConfig,rootReducer)

export default persistedReducer
// const initialState = {
//   item: [],
//   filter: ""
// }
// const item = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload]
//     case actionTypes.DELETE:
//       const leftContacts = [...state].splice(payload, 1)
//       return leftContacts
//     default:
//       return state
//   }
// }
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload
//     default:
//       return state
//   }
// }
// const Contactreducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD:
//       return {
//         ...initialState,item: [...state.item, action.payload]
//       }
//     case actionTypes.DELETE:
//       const leftContacts = [...state.item].splice(action.payload, 1)
//       return {
//         ...initialState,
//         item:leftContacts
//       }
//     case actionTypes.FILTER:
//       return {
//         ...state,
//         filter:action.payload
//       }
//       default:
//         return state
//       }
// }
