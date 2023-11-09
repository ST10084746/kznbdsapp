import React from 'react'
import { useState } from 'react'

function ApiKey() {
const[name, setName] = useState('')


  async function createApiKey(event){
    event.preventDefault();
    const token = localStorage.getItem('token');
    //const getToken = () => localStorage.getItem("token")
    //? JSON.parse(localStorage.getItem("token"))
    //: null;

    const getAuthorizationHeader = () => `Bearer ${token}`;

    const response = await fetch('http://localhost:5050/apikey', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': getAuthorizationHeader(),
      },

      body: JSON.stringify({
        name
      }),
    })

    const data = await response.json();
    if(data.apikey){
      alert('Key Created')
      //window.location.href = '/'
    }
    else{
      alert('Failure')
      
    }
    console.log(data);
  }
  return (
    <div>
        <h1>ApiKey!!</h1>
      <form onSubmit={createApiKey}>
        <input
          value ={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
           placeholder="Name"/>
           <br/>
           <input type="submit" value="Login"/>
        
      </form>
    </div>
  )
}

export default ApiKey