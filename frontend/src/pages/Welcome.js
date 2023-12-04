import React from 'react'
import { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import { SERVER_IP } from './IP';

function Welcome() {
    const navigate = useNavigate();
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault();
    const response = await fetch(`https://${SERVER_IP}/user/login`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email:email,
        password: password,
      }),
    })

    const data = await response.json();
    if(data.token){
      localStorage.setItem('token', data.token)
      alert('Login Successful')
      navigate('/home')
    }
    else{
      alert('Login Unuccessful')
      
    }
    console.log(data);
  }
  return (
    <div className='window'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={loginUser}>
          <h2>Login</h2>
          <div className='mb-2'>
            <label>Username</label>
            <input className='form-control'
              value ={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"/>
          </div>
          <div className='mb-2'>
          <label>Password</label>
            <input className='form-control'
              value ={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"/>
          </div> 

          <button className='btn btn-success my-2 btn-lg w-100' type='submit'>Login</button>
          <Link to="/" className='btn btn-danger my-2 btn-lg w-100' > Cancel</Link>
        </form>
      </div>
    </div>
   /* <div className='window'>
        <div className='w-50 bg-white rounded p-3'>
            <div className='mx-4 col text-center' >
                <h2>Welcome</h2>

            </div>
            <div className='form-group'>
                <Link to="/register" className='btn btn-primary my-2 btn-lg w-100'> Register</Link>
                

            </div>
            <div className='form-group'>
                <Link to="/login" className='btn btn-primary my-2 btn-lg w-100'> Login</Link>   
            </div>
            

        </div>
    </div>*/
  )
}

export default Welcome