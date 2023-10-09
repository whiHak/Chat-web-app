import React from 'react'
import Add from '../images/Add.png'
export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something'/>
      <div className='inputFiles'>
        <input style={{display:"none"}}type='file' id='file'/>
        <input style={{display:"none"}}type='file' id='file'/>
        <label htmlFor='file'>
          <img src={Add} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
