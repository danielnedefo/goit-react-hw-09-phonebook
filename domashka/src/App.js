import React,{useEffect} from 'react';
import Phonebok from './Components/Phonebook/phonebook'
import { Switch } from 'react-router-dom'
import '../src/styles/base.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AppBar from './Components/UserMenu/AppBar'
import {useDispatch} from 'react-redux'
import authOperations from './Components/redux/auth/auth-operations'
import PrivateRoute from './Components/Route/PrivateRoute'
import PublicRoute from './Components/Route/PublicRoute'
// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser()
//   }
//   render() {
//     return (
//       <>
//       <AppBar/>
//       <div className="App">
//         <Switch>
//           <PublicRoute path="/register" component={Register}/>
//           <PublicRoute path="/login" restricted redirectTo='/contacts' component={Login}/>
//           <PrivateRoute path="/contacts" component={Phonebok} redirectTo="/login"/>
//       </Switch>
//       </div>
//       </>
//   )
//   }
  
// }
// const mapDispatchToProps = {
//   onGetCurrentUser:authOperations.getCurentUser
// }


// export default connect(null,mapDispatchToProps)(App);

export default function App() {
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authOperations.getCurentUser())
  },[])
  return (
      <>
      <AppBar/>
      <div className="App">
        <Switch>
          <PublicRoute path="/register" restricted redirectTo='/' component={Register}/>
          <PublicRoute path="/login" restricted redirectTo='/' component={Login}/>
          <PrivateRoute path="/contacts" component={Phonebok} redirectTo="/login"/>
      </Switch>
      </div>
      </>
  )
}



