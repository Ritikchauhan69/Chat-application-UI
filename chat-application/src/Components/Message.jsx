import React from 'react'
import '../Componentcss/Message.css'
import Photo from '../Images/indian.avif'
function Message() {
  return (
    <div className='Message owner'>
      <div className="Messageinfo">
        <img src={Photo} alt="" />
        <span>Just Now</span>
      </div>
      <div className="Messagecontent">
<p>Hello</p>
<img src={Photo} alt="" />
      </div>
    </div>
  )
}

export default Message