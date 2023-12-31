import React from 'react'
import './registerpage.css'
import Registerpage from './Registerpage'
function Loginpage() {
  return (
    <>
    <div className="register">
      <div className="registerbox">
       <p className='Chat'>Chat</p>
       <p className='Register'>Log In</p>
        <form className='Login' action="">
          <input className='Name' type="text" placeholder='Name' id="" />
          <input className='Name' type="email" placeholder='Email'  id="" />
          <input className='Name' type="password" placeholder='Password'  id="" />
          <button className='Name1 btn btn-primary'>Sign In</button>
          <p className='Acc'>Don't have an Account ? <button className='Name1 btn btn-primary'>
            <a href="./Registerpage">Registerpage</a></button></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Loginpage