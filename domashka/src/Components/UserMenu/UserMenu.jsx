import React from 'react'
import { useSelector,useDispatch, shallowEqual } from 'react-redux'
import { logout } from '../redux/auth/auth-operations'
import authSelectors from '../redux/auth/auth-selectors'

const UserMenu = () => {
  const name = useSelector(authSelectors.getName, shallowEqual)
  const dispatch = useDispatch()
  return (
    <>
      <h3>Welcome {name}</h3>
      <button onClick={() =>dispatch(logout())}>Log out</button>
      </>
   );
}

 
export default UserMenu;