import React from 'react'
import { useEffect, useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import { SERVER_IP } from './IP'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AddSign from '../components/AddSign'

function Signs() {
    const [signs, setSigns] =useState([{
    }])
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    
    async function populateSigns(token){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/signs`, {
            method:'GET',
            headers:{
                'Authorization': Autheader(),
            },
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            setSigns(data.signs)
        }
        else{
            alert(data.error)
        }
    }

    async function CreateSign(title, image){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/signs`, {
            method:'POST',
            crossDomain:true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': Autheader(),
            },
            body: JSON.stringify({
                image,
                title,
                
            })
        })

        const data = await req.json();
        if(data.status ==='ok'){
            navigate('/signs')
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
        const req = await fetch(`http://${SERVER_IP}/signs/${eventId}`, {
            method:'DELETE',
            headers:{
                'Authorization': Autheader(),
            },
            
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            populateSigns()
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
                populateSigns(token);
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
                    <h1>Signs</h1>
                    <AddSign CreateSign = {CreateSign}/>
                </section>
                <section className='table-body'>
                    <table >
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
            
                        </thead>
                        <tbody>
                            {
                                signs.map((sign)=>{
                                    return <tr>
                                        <td>{sign.image===''|| sign.image===null?
                                            <img width={100} height={100} alt='sign' src={'../reg No.PNG'}/>:
                                            <img width={100} height={100} alt='sign' src={sign.image}/>}</td>
                                        <td>{sign.title}</td>
                                        <td><button className='btn btn-danger' onClick={(e)=>handleDelete(sign._id)}>Delete</button></td>
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

export default Signs