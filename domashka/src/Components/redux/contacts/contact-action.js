import { createAction } from '@reduxjs/toolkit'
// export const addContact = createAction("add")
// export const deleteContact = createAction("delete")
export const filterContact = createAction("filter")

export const fetchRequest = createAction("contacts/fetchRequest")
export const fetchSuccess = createAction("contacts/fetchSuccess")
export const fetchError = createAction("contacts/fetchError")

export const makeRequest = createAction("contacts/request")
export const reqSuccess = createAction("contacts/success")
export const reqError = createAction("contacts/error")

export const deleteRequest = createAction("contacts/deleteRequest")
export const deletereqSuccess = createAction("contacts/deleteSuccess")
export const deletereqError = createAction("contacts/deleteError")