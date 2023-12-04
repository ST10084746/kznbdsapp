import React from 'react'
import { BsCart3, BsCartFill, BsChatFill, BsFillCalendar3WeekFill,  BsFillHouseDoorFill } from 'react-icons/bs'
import { MdSignLanguage } from "react-icons/md";
import { HiReceiptTax } from "react-icons/hi";
import logo from '../images/logo.png'

function Sidebar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} alt='logo'/>
        </div>
        <span className=' icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/home">
            <BsFillHouseDoorFill className='icon'/>Home
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="/events">
            <BsFillCalendar3WeekFill className='icon'/>Events
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="/products">
            <BsCartFill className='icon'/>Products
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="/signs">
            <MdSignLanguage className='icon'/>Signs
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="phrases">
            <BsChatFill className='icon'/>Phrases
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="/section18A">
            <HiReceiptTax className='icon'/>Section 18A
          </a>

        </li>
      </ul>

    </aside>
  )
}

export default Sidebar