import React from 'react'
const RegisterForm = ({handleChange,onSubmit,data}) => {
  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" value={data.name} onChange={handleChange} name="name" type="text" />
        <br/>
        <label htmlFor="email">Email</label>
        <input id="email" value={data.email} onChange={handleChange} name="email" type="email" />
        <br/>
        <label htmlFor="password">Password</label>
        <input id="password" value={data.password} onChange={handleChange} name="password" type="password" />
        <br />
        <button type="submit">Register</button>
      </form>
      </>
   );
}
 
export default RegisterForm;