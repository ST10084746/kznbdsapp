import React from 'react'
import { useState } from 'react'

function Login() {
const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault();
    const response = await fetch('http://localhost:5050/user/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json();
    if(data.token){
      localStorage.setItem('token', data.token)
      alert('Login Successful')
      window.location.href = '/'
    }
    else{
      alert('Login Unuccessful')
      
    }
    console.log(data);
  }
  return (
    <div>
        <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value ={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
           placeholder="Email"/>
           <br/>
        <input
          value ={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
           placeholder="Password"/>
           <br/>
           <input type="submit" value="Login"/>
        
      </form>
    </div>
  )
}

export default Login