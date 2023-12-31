import React from 'react'
import "../Componentcss/Navbar.css";
import photo from "../Images/indian.avif";
export default function Chats() {
  return (
    <div className="Userchat">
            <img className="Image-1" src={photo} alt="" />
            <div className="Userchatinfo">
              <span>Rahul</span>
              <p>Hello</p>
            </div>
          </div>
  )
}
