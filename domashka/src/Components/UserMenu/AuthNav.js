import React from 'react';
import { NavLink } from 'react-router-dom'
import  '../../styles/base.css'
const AuthNav = () => {
  return (
    <>
    <button className="NavBtn"><NavLink className="BtnsNav" to="/login">Login</NavLink></button>
      <button className="NavBtn"><NavLink className="BtnsNav" to="/register">Register</NavLink></button>
      </>
   );
}
 
export default AuthNav;