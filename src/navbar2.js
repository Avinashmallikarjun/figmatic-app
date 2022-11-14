import React from 'react'
function navbar2() {
  return (
    <nav className='nav2'>
      <div className='nav3'>
        <ul>
          <li>
            <a href='/' >ALL</a>
          </li>
          <li>
            <a href='/' >lIVE</a>
          </li>
          <li>
            <a href='/' >DRAFT</a>
          </li>
          <li>
            <a href='/' >ARCHIVED</a>
          </li>
        </ul>
      </div>
      <div className='dropdown'>
        <div className='searchbar'>Select item</div>
      </div>
    </nav>
  )
}

export default navbar2