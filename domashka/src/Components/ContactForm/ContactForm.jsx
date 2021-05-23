import React from 'react';
import { v4 } from "uuid";
import {fields} from '../../fields'
import { initialState } from './initialState'
import useForm from '../../shared/hooks/useForm'

const {nameInput,numberInput} = fields
 const Form = ({ onSubmit }) => {
  const [data,handleChange,handleSubmit,] = useForm(initialState,onSubmit)

 const nameInputId = v4()
 const phoneInputId = v4()
  return (
    <>
         <form action="submit" onSubmit={handleSubmit}>
         <label htmlFor={nameInputId}>Name </label>
           < input onChange={handleChange}
            id={nameInputId}
            type={nameInput.type}
            name={nameInput.name}
            value={data.name}
            pattern={nameInput.pattern}
            title={nameInput.title}
            required={nameInput.required}
          />
          <br/>
          <label htmlFor={phoneInputId}>Number</label>
          <input onChange={handleChange}
            id={phoneInputId}
            type={numberInput.type}
            value={data.number}
            name={numberInput.name}
            pattern={numberInput.pattern}
            title={numberInput.title}
            required={numberInput.required}/>
          <br/>
          <button type="submit" >Add Contact</button>
        </form>
        </>
  )
}
export default Form