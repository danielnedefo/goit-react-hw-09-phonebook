import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import  authSelectors  from '../redux/auth/auth-selectors'
import  '../../styles/base.css'

const Navigation = () => {
  const isAuthinficated = useSelector(authSelectors.getAutinficated, shallowEqual)
  return (
    <>
      <li><NavLink exact className="NavLink" activeClassName="NavLink--active" to="/">Home</NavLink></li>
      {isAuthinficated && <li><NavLink className="NavLink" activeClassName="NavLink--active" to="/contacts">Add Contacts</NavLink></li>} 
      </>
   );
}






export default Navigation;