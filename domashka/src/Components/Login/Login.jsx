import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import { useDispatch } from 'react-redux'
import {login} from '../redux/auth/auth-operations'
import { initialState } from './initialState'
import useForm from '../../shared/hooks/useForm'
export default function Login() {
  const [data, handleChange, , setDataForm] = useForm(initialState)
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(data))
    resetQuery()
   }
   const resetQuery = () => {
     setDataForm(data)
   }
  return (
     <>
         <LoginForm data={data} handleChange={handleChange} onSubmit={onSubmit}/>
         </>
  )
 }

