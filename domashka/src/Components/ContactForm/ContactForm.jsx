import React, { Component } from 'react';
import { v4 } from "uuid";
import {fields} from '../../fields'
const {nameInput,numberInput} = fields

class Form extends Component{
  state = {
    name: '',
    number: ''
  }
    handleChange = ({target}) => {
    this.setState({
      [target.name]:target.value
   })
  }
  resetForm(){
        this.setState({
          name: "",
          number:""
        })
  }
  onSubmit = (event) => {
    event.preventDefault()
    const { onSubmit } = this.props;
    onSubmit(this.state)
    this.resetForm()
  }
  nameInputId = v4()
  phoneInputId = v4()
  render() {
    const { onSubmit,handleChange } = this
    return (
      <>
        <form action="submit" onSubmit={onSubmit}>
        <label htmlFor={this.nameInputId}>Name </label>
          < input onChange={handleChange}
            id={this.nameInputId}
            type={nameInput.type}
            name={nameInput.name}
            value={this.state.name}
            pattern={nameInput.pattern}
            title={nameInput.title}
            required={nameInput.required}
          />
          <br/>
          <label htmlFor={this.phoneInputId}>Number</label>
          <input onChange={handleChange}
            id={this.phoneInputId}
            type={numberInput.type}
            value={this.state.number}
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
}
export default Form