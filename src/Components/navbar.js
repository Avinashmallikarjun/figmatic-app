import React from 'react'
import Images from '../images/photo.jpg'



function navbar() {
  return (
    <nav className='nav'>
      <a href='/' className='title'>KNOWLEDGE</a>
      <ul>
        <li>
          <button className='btn'>CREATE COURSE</button>
        </li>
        <li>
          <img className='photo' src={Images} alt='avinash' />
        </li>
      </ul>
    </nav>
  )
}

export default navbar