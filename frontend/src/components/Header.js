import React from 'react'
import {BsJustify, BsPersonCircle} from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon'/>

      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon'/>
      </div>

    </header>
    
  )
}

export default Header