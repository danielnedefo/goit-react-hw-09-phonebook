import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Filter from '../Filter/Filter'
import ContactForm from '../ContactForm/ContactForm'
import ContactListItem from '../ContactListItem/ContactListItem'
import contactSelectors from '../redux/contacts/contacts-selectors'
import contactsFetch from '../redux/contacts/contact-operations'
export default function Phonebook({ filtredContacts}) {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(contactsFetch.fetchContacts())
  }, [])
  const item = useSelector(contactSelectors.itemContact)
  const filter = useSelector(contactSelectors.filterForContacts)
  const normalizedFilter = filter.toLowerCase()
  const filterContacts = item.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
  return (
    <>
          <ContactForm onSubmit={(contact) => dispatch(contactsFetch.contactsAdd(contact))} />
         <h2>Contacts</h2>
         <Filter onChange={filtredContacts} ></Filter>
          <div>
           <ul>
             {item.length ? <ContactListItem contacts={filterContacts} onDelete ={(id) => dispatch(contactsFetch.deleteContact(id))}/> : <p>There is no contact here</p>} 
            </ul>
          </div>
       
      </> 
  )
}
