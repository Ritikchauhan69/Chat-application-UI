import React from 'react'
import '../Componentcss/Input.css'
import Photo from '../Images/Clip.png'
import Photo1 from '../Images/Gallery.png'
function Input() {
  return (
    <div className='Input'>
      <input className='Type' type="text" placeholder='Type Something...' />
      <div className="send">
        <img className='Clip' src={Photo} alt="" />
        <input type="file" style={{display:'none'}} id="file" />
        <label htmlFor="file">
          <img className='Gallery' src={Photo1} alt="" />
        </label>
        <button className='Send'>Send</button>
      </div>
    </div>
  )
}

export default Input