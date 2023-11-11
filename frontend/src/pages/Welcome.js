import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
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
    </div>
  )
}

export default Welcome