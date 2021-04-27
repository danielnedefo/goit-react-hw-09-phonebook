import React, { Component } from 'react';
import { v4 } from "uuid";
import Filter from './Components/Filter/Filter'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactListItem from './Components/ContactListItem/ContactListItem'
class Phonebook extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  changeFilter = ({target}) => {
    this.setState({ filter: target.value })
  }

  addContact = (newContact) => {
   
    this.setState(prevState => {
      const { contacts } = prevState;
      const result = contacts.find(profile => profile.name === newContact.name);
      if (result) {
        alert(`${newContact.name} are already in list`)
        return {
          contacts
        }
      }
      const newContacts = [...contacts];
      newContact.id = v4();
      newContacts.push(newContact);
      return {
        contacts: newContacts
      }
    })
  }
  
  deleteContact = (idx) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter((_, index) => index !== idx)
    }))
  }
  render() {
    const { addContact,deleteContact,changeFilter } = this
    const normalizedFilter = this.state.filter.toLowerCase()
    const filterContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} value={this.state.filter}></Filter>
        <div>
          <ul>
            {this.state.contacts.length ? <ContactListItem contacts={filterContacts} onDelete ={deleteContact}/> : <p>There is no contact here</p>}
          </ul>
        </div>
       
    </>
    )
  }
}
export default Phonebook
