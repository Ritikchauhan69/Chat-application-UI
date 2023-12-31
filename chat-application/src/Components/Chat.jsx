import React from 'react'
import '../Componentcss/Chat.css'
import Photo from '../Images/Addfriend.png'
import Photo1 from '../Images/Videocall.png'
import Photo2 from '../Images/More.png'
import Messages from '../Components/Messages'
import Input from '../Components/Input'
function Chat() {
  return (
    <div className='Chat'>
      <div className="Chatinfo">
        <span>Rahul</span>
        <div className="Chaticons">
<img className='Chaticonsimage' src={Photo} alt="" />
<img className='Chaticonsimage' src={Photo1} alt="" />
<img className='Chaticonsimage' src={Photo2} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}


export default Chat