import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SERVER_IP } from './IP'

function Register() {

    const navigate = useNavigate()
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault();
    const response = await fetch(`http://${SERVER_IP}/user/register`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json();
    if(data.status ==='ok'){
      navigate('/login');
    }
    console.log(data);
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={registerUser}>
          <h2>Register</h2>
          <div className='mb-2'>
            <label>Username</label>
            <input className='form-control'
                  value ={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Username"
                  pattern=".{3,}"
                  title="Username should have three or more characters"/>
          </div>
          <div className='mb-2'>
            <label>Email</label>
            <input className='form-control'
                  value ={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  pattern=".{3,}"
                  title="Email not valid"/>
          </div>
          <div className='mb-2'>
            <label>Password</label>
            <input className='form-control'
                  value ={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  pattern=".{5,}"
                  title="Password should have five or more characters"/>

          </div> 
          <button className='btn btn-success my-2 btn-lg w-100' type='submit'>Register</button>    
          <Link to="/" className='btn btn-danger my-2 btn-lg w-100'> Cancel</Link>
          
            
        </form>
        </div>
    </div>

    
  )
}

export default Register