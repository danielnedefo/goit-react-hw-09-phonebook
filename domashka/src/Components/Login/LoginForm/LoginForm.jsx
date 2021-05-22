import React from 'react'
const LoginForm = ({onSubmit,handleChange,data}) => {
  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" value={data.email} onChange={handleChange} name="email" type="email" />
        <br/>
        <label htmlFor="password">Password</label>
        <input id="password" value={data.password} onChange={handleChange} name="password" type="password" />
        <br />
        <button type="submit" >Log In</button>
      </form>
      </>
   );
}
 
export default LoginForm;