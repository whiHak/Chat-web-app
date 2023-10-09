import React from 'react'
import profile from "../images/profile.jpg"

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>My Chats</span>
      <div className='user'>
        <img src={profile} alt=''/>
        <span className='name'>Bets 95</span>
        <button>Logout</button>
      </div>
    </div>
  )
}