import React from 'react'
import Add from '../images/Add.png'
export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form>
                <span className='mainTitle'>My Chats</span>
                <span className='pageTitle'>Register</span>
                <input type='text' placeholder='Username'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{display: "none"}} type='file' id='avatar'/>
                <label htmlFor='avatar'>
                    <img src={Add} alt='add avatar icon'/>
                    <span>Add an avatar</span>               
                </label>
                <button>Sign Up</button>
                <p>You have an account? Login </p>
            </form>
        </div>
    </div>
  )
}
