import React, { Component,useState } from 'react'
import LoginForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import {login} from '../redux/auth/auth-operations'
// class Login extends Component{
//   state = {
//     email: "",
//     password:""
//   }
//   handleChange = ({ target }) => {
//     this.setState(() => {
//       return {
//       [target.name]:target.value
//     }
//   })
//   }
//   onSubmit = (e) => {
    
//     e.preventDefault()
//     this.props.onLogin(this.state)
//   this.resetQuery()  
//   }
//   resetQuery = () => {
//     this.setState(() => {
//       return {
//         email: "",
//         password:""
//       }
//     })
//   }
//   render() {
//     const {email,password} = this.state
//     const {handleChange,onSubmit} = this
//     return (
//       <>
//         <LoginForm data={{email,password}} handleChange={handleChange} onSubmit={onSubmit}/>
//         </>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onLogin: (data) => dispatch(login(data))
// })


 function Login({onLogin}) {
  const [loginData, setData] = useState({
    email: '',
    password:''
  })
  const handleChange = ({target}) => {
    setData({
      ...loginData,
      [target.name]: target.value,

    })}
  const onSubmit = (e) => {
    e.preventDefault()
    onLogin(loginData)
    resetQuery()
   }
   const resetQuery = () => {
     setData(loginData)
   }
  return (
     <>
         <LoginForm data={loginData} handleChange={handleChange} onSubmit={onSubmit}/>
         </>
  )
 }
const mapDispatchToProps = dispatch => ({
  onLogin: (data) => dispatch(login(data))
})
export default connect(null,mapDispatchToProps)(Login)
