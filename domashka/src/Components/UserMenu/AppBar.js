import React from 'react';
import {connect} from 'react-redux'
import '../../styles/base.css'
import  authSelectors  from '../redux/auth/auth-selectors'
import AuthNav from './AuthNav'
import Navigation from './Navigation'
import UserMenu from './UserMenu'


const AppBar = ({ isAuthinficated }) => {
  
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
const mapStateToProps = (state) => ({
  isAuthinficated:authSelectors.getAutinficated(state)
})

export default connect(mapStateToProps)(AppBar);