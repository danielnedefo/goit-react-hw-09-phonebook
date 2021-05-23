import React from 'react';
import {useSelector} from 'react-redux'
import '../../styles/base.css'
import  authSelectors  from '../redux/auth/auth-selectors'
import AuthNav from './AuthNav'
import Navigation from './Navigation'
import UserMenu from './UserMenu'

const AppBar = () => {
  const isAuthinficated = useSelector(authSelectors.getAutinficated)
  return (
    <div className="NavBar">
    <ul className="NavUL">
       <Navigation/>
      </ul>
      <div className="NavRoutes">
       {isAuthinficated ? <UserMenu/> : <AuthNav/>}
        </div>
        </div>
   );
}

export default AppBar