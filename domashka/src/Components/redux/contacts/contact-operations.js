import axios from 'axios'
import {makeRequest,fetchError,fetchRequest,fetchSuccess,reqSuccess,reqError,deleteRequest,deletereqSuccess,deletereqError} from './contact-action'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const fetchContacts = () => dispatch => {
  dispatch(fetchRequest())
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
  .catch(error => dispatch(fetchError(error)))
}

const contactsAdd = contact => dispatch => {

  dispatch(makeRequest())
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(reqSuccess(data)))
  .catch(error => dispatch(reqError(error)))
}

const deleteContact = id => dispatch => {
  dispatch(deleteRequest())
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deletereqSuccess(id)))
    .catch(error => dispatch(deletereqError(error))) 
}

export default {
  contactsAdd,
  deleteContact,
  fetchContacts
}