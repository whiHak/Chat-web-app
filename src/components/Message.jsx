import React from 'react'
import profile from '../images/profile.jpg'
const Message = () => {
  return (
    <div className='message owner'>
      <div className='mInfo'>
        <img src={profile} alt='profilePic'/>
        <span>just now</span>
      </div>
      <div className='mContent'>
        <span>Message content</span>
        {/* <img src={profile} alt=''/> */}
      </div>
    </div>
  )
}

export default Message