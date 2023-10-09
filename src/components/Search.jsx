import React from 'react'
import profile from "../images/profile.jpg"
export const Search = () => {
  return (
    <div className='search'>
      <div className='form'>
        <input type='text' placeholder='Find a User'/>
      </div>
      <div className='userInfo'>
        <img src={profile} alt=''/>
        <div className='chatInfo'>
          <span>Betse 95</span>
        </div>
      </div>
    </div>
  )
}
