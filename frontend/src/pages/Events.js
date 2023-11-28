import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVER_IP } from './IP';

function Events() {
    const [events, setEvents] =useState([{
    }])
    const navigate = useNavigate()
    
    async function populateEvents(token){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/events`, {
            method:'GET',
            headers:{
                'Authorization': Autheader(),
            },
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            setEvents(data.events)
        }
        else{
            alert(data.error)
        }
    }
    async function handleDelete(eventId){
        const Autheader = ()=> `Bearer ${localStorage.getItem('token')}`
        const req = await fetch(`http://${SERVER_IP}/events/${eventId}`, {
            method:'DELETE',
            headers:{
                'Authorization': Autheader(),
            },
            
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            populateEvents()
        }
        else if(data.status ==='fail'){
            alert('Failed to delete')
        }
        else{
            alert(`Session Expired, Please Login again....${data.error}`)
            navigate('/login')

        }
    
    }
    useEffect(()=>{      
        const token = localStorage.getItem('token');
        if(!token){
            
                navigate('/login')
        }   
        else{
                populateEvents(token);
            }
        }
    
    ,[])
    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to="/createEvent" className='btn btn-success'> Add +</Link>
            <Link to="/products" className='btn btn-success'> Show Products</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
    
                    </tr>
    
                </thead>
                <tbody>
                    {
                        events.map((event)=>{
                            return <tr>
                                <td>{event.image===''|| event.image===null?
                                    <img width={100} height={100} alt='product' src={'../reg No.PNG'}/>:
                                    <img width={100} height={100} alt='product' src={event.image}/>}</td>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.date}</td>
                                <td><button className='btn btn-danger' onClick={(e)=>handleDelete(event._id)}>Delete</button></td>
                            </tr>
                            
                        })
                    }
    
                </tbody>
                
            </table>
    
        </div>
    </div>
    )
}

export default Events