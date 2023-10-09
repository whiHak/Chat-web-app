import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form>
                <span className='mainTitle'>My Chats</span>
                <span className='pageTitle'>Login</span>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>Sign in</button>
                <p>You don't have an account? Register </p>
            </form>
        </div>
    </div>
  )
}
