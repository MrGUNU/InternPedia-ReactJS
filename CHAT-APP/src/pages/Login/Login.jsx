/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets.js'
import { signup } from '../../config/firebase.js'

const Login = () => {

  const [currState,setCurrState] = useState("Sign up");
  const [userName,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onSubmitHandler = (event) => {
      event.preventDefault();
      if(currState === "Sign up") {
        signup(email,password,userName);
      }
  }

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState === 'Sign up'?<input onChange={(e)=>setUsername(e.target.value)} value={userName} type="text" placeholder='username' className='form-input' required />:null}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email address' className='form-input' required />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='form-input' required />
        <button type="submit" className='form-button'>{currState === 'Sign up'?'Create account':'Login now'}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-toggle">
          {
            currState === 'Sign up'
            ? <p className='login-toggle'>Already have an account <span onClick={()=>setCurrState('Login')}>Login</span></p>:<p className='login-toggle'>Create an account <span onClick={()=>setCurrState('Sign up')}>Click here</span></p>
          }
          
          
        </div>
      </form>
    </div>
  )
}

export default Login
