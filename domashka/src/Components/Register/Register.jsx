import React from 'react'
import RegisterForm from './RegisterForm/RegisterForm'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/auth-operations'
import {initialState} from './initialState'
import useForm from '../../shared/hooks/useForm'

function Register() {
  const [data,handleChange,,setDataForm] = useForm(initialState)
   const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(data))
    resetQuery()
  }
  const resetQuery = () => {
    setDataForm(data)
  }
  return (
      <RegisterForm data={data} onSubmit={onSubmit} handleChange={handleChange}/>
    )
}


export default Register