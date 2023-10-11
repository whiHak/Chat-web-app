import React, { useContext } from 'react'
import profile from "../images/profile.jpg"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>My Chats</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt=''/>
        <span className='name'>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}