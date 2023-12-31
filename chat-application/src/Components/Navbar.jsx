import React from "react";
import "../Componentcss/Navbar.css";
import photo from "../Images/indian.avif";
import Chats from '../Components/Chats'
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <span className="logo">Chat</span>
        <div className="user">
          <img className="Image" src={photo} alt="" />
          <span>Ram</span>
          <button className="Button">Logout</button>
        </div>
      </div>
      <div className="Search">
        <div className="Searchform">
          <input placeholder="Find a user" className="Input-1" type="text" />
          <Chats/>
          <Chats/>
          <Chats/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
