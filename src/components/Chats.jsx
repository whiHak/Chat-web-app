import React from 'react'
import profile from '../images/profile.jpg'
export const Chats = () => {
  return (
    <div className='chats'>
      <div className='userInfo'>
        <img src={profile} alt=''/>
        <div className='chatsInfo'>
          <span>Betse 95</span>
          <p>blablab</p>
        </div>
      </div>
      <div className='userInfo'>
        <img src={profile} alt=''/>
        <div className='chatsInfo'>
          <span>Betse 95</span>
          <p>blablab</p>
        </div>
      </div>
      <div className='userInfo'>
        <img src={profile} alt=''/>
        <div className='chatsInfo'>
          <span>Betse 95</span>
          <p>blablab</p>
        </div>
      </div>
    </div>
  )
}
