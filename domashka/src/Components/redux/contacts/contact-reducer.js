import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import {  fetchSuccess,deletereqSuccess, filterContact,reqSuccess } from './contact-action'




const item = createReducer([], {
  [fetchSuccess]:(state,{payload}) => payload,
  [reqSuccess]: (state, { payload }) => [...state, payload],
  [deletereqSuccess]: (state, { payload }) => state.filter(({id}) => id !== payload)
})
const filter = createReducer('', {
  [filterContact]:(_, { payload }) => payload
})
 const rootReducer =  combineReducers({
  item,
  filter
 })

// const persistedReducer = persistReducer(persistConfig,rootReducer)

// { !!!!!!
//     const contacts = state
//     contacts.splice(payload, 1)
//     return [...contacts]
//   }
export default rootReducer
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
