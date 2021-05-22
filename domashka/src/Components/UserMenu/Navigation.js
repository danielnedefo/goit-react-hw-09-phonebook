import React from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import  '../../styles/base.css'

const Navigation = ({isAuthinficated}) => {
  return (
    <>
      <li><NavLink exact className="NavLink" activeClassName="NavLink--active" to="/">Home</NavLink></li>
      {isAuthinficated && <li><NavLink className="NavLink" activeClassName="NavLink--active" to="/contacts">Add Contacts</NavLink></li>} 
      </>
   );
}

const mapStateToProps = (state) => ({
  isAuthinficated: state.auth.token
})




export default connect(mapStateToProps)(Navigation);