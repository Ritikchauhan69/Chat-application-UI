import React from 'react'
import './registerpage.css'
import Photo from '../Images/download.png'
function registerpage() {
  
  return (
    <>
    <div className="register">
      <div className="registerbox">
       <p className='Chat'>Chat</p>
       <p className='Register'>Register</p>
        <form  className='Login' action="">
          <input className='Name' type="text" placeholder='Name' id="" />
          <input className='Name' type="email" placeholder='Email'  id="" />
          <input className='Name' type="password" placeholder='Password'  id="" />
          <input style={{display:'none'}} className='file' type="file" />
          <label className='file1' htmlFor="file"><a className='photolink' href=""><img className='image' src={Photo} alt="" /></a><p className='Avatar'>&nbsp;Add Avatar</p></label>
          <button className='Name1 btn btn-primary'>Sign Up</button>
          <p className='Acc'>Don't have an Account ? <button className='Name1 btn btn-primary'>Log In</button></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default registerpage