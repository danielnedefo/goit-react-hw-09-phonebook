import { v4 } from "uuid";
import React from 'react';
const ContactList = ({ contacts, onDelete }) => {
       
  const contact = contacts.map(({ name, number,id}) => {
    console.log(contacts)
    return (<li key={v4()}>
      {name}: { number}
      <button onClick={() => onDelete(id)}>x</button></li>)
    })
  return contact
}
export default ContactList;
