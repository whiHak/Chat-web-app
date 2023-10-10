import React from 'react'
import profile from "../images/profile.jpg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>My Chats</span>
      <div className='user'>
        <img src={profile} alt=''/>
        <span className='name'>Bets 95</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}