import React, { Component } from 'react'
import RegisterForm from './RegisterForm/RegisterForm'
import { connect } from 'react-redux'
import {register} from '../redux/auth/auth-operations'

class Register extends Component{
state = {
  name: "",
  email: "",
  password:""
  }
  handleChange = ({ target }) => {
    this.setState(() => {
      return {
      [target.name]:target.value
    }
  })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onRegister(this.state)
    this.resetQuery()
  }
    resetQuery = () => {
    this.setState(() => {
      return {
        name: "",
        email: "",
        password:""
      }
    })
  }
  render() {
    const {name,email,password} = this.state
    const {onSubmit,handleChange} = this
    return (
      <>
  <RegisterForm data={{name,email,password}} onSubmit={onSubmit} handleChange={handleChange}/>
        </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data) => dispatch(register(data))
})

export default connect(null,mapDispatchToProps)(Register)
