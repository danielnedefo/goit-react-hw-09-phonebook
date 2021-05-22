import React,{Component} from 'react';
import Phonebok from './Components/Phonebook/phonebook'
import { Route,  Switch } from 'react-router-dom'
import '../src/styles/base.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AppBar from './Components/UserMenu/AppBar'
import {connect} from 'react-redux'
import authOperations from './Components/redux/auth/auth-operations'
import PrivateRoute from './Components/Route/PrivateRoute'
import PublicRoute from './Components/Route/PublicRoute'
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <>
      <AppBar/>
      <div className="App">
        <Switch>
      <PublicRoute path="/register" component={Register}/>
      <PublicRoute path="/login" restricted redirectTo='/contacts' component={Login}/>
      <PrivateRoute path="/contacts" component={Phonebok} redirectTo="/login"/>
      </Switch>
      </div>
      </>
  )
  }
  
}



const mapDispatchToProps = {
  onGetCurrentUser:authOperations.getCurentUser
}


export default connect(null,mapDispatchToProps)(App);
