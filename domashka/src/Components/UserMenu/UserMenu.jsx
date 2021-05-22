import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../redux/auth/auth-operations'

const UserMenu = ({ name,onLogOut }) => {
  return (
    <>
      <h3>Welcome {name}</h3>
      <button onClick={onLogOut}>Log out</button>
      </>
   );
}
const mapStateToProps = (state) => ({
  name: state.auth.user.name
})
const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logout())
})

 
export default connect(mapStateToProps,mapDispatchToProps)(UserMenu);