import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVER_IP } from './IP';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AddEvent from '../components/AddEvent';

function Events() {
    const [events, setEvents] =useState([{
    }])
   
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    
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
    async function CreateEvent(title, image, description, date){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/events`, {
            method:'POST',
            crossDomain:true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': Autheader(),
            },
            body: JSON.stringify({
                image,
                title,
                description,
                date,
            })
        })

        const data = await req.json();
        if(data.status ==='ok'){
            populateEvents()
        }
        else if(data.status==='fail'){
            alert("Failed to create Product")
            navigate('/login')
        }
        else{
            alert('invalid Token')
            navigate('/login')
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
    
    )
    return (
        <div className='grid-container'>
            <Header/>
            <Sidebar/>
            <main className='table-home'>
            <div className='table'>
                <section className='table-header'>
                    <h1>Events</h1>
                    
                    <AddEvent CreateEvent = {CreateEvent}/>
                </section>
                <section className='table-body'>
                    <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                
                                </tr>
                
                            </thead>
                            <tbody>
                                {
                                    events.map((event)=>{
                                        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
                                        const date = new Date(event.date).toLocaleDateString('en-us', options)
                                        return <tr>
                                            <td>{event.image===''|| event.image===null?
                                                <img width={100} height={100} alt='product' src={'../reg No.PNG'}/>:
                                                <img width={100} height={100} alt='product' src={event.image}/>}</td>
                                            <td>{event.title}</td>
                                            <td>{event.description}</td>
                                            <td>{date}</td>
                                            <td><button className='btn btn-danger' onClick={(e)=>handleDelete(event._id)}>Delete</button></td>
                                        </tr>
                                        
                                    })
                                }
                
                            </tbody>
                            
                    </table>

                </section>
            
                </div>

        </main>

        </div>
        
    
    )
}

export default Events