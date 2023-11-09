import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

function Navbar() {
  return (
    <nav>
        <ul>
            <Link to={<Login/>}><li>Login</li></Link>
            <Link to={<Register/>}><li>Register</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar