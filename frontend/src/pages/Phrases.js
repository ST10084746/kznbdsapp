import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Phrases() {
    const [phrases, setPhrases] =useState([{
    }])
    const navigate = useNavigate()
    
    async function populatePhrases(token){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch('http://102.37.136.142/phrases', {
            method:'GET',
            headers:{
                'Authorization': Autheader(),
            },
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            setPhrases(data.phrases)
        }
        else{
            alert(data.error)
        }
    }
    async function handleDelete(eventId){
        const Autheader = ()=> `Bearer ${localStorage.getItem('token')}`
        const req = await fetch(`http://102.37.136.142/phrases/${eventId}`, {
            method:'DELETE',
            headers:{
                'Authorization': Autheader(),
            },
            
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            populatePhrases()
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
                populatePhrases(token);
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
                        
    
                    </tr>
    
                </thead>
                <tbody>
                    {
                        phrases.map((phrase)=>{
                            return <tr>
                                <td>{phrase.image===''|| phrase.image===null?
                                    <img width={100} height={100} alt='sign' src={'../reg No.PNG'}/>:
                                    <img width={100} height={100} alt='sign' src={phrase.image}/>}</td>
                                <td>{phrase.title}</td>
                                <td>{phrase.description}</td>
                                <td><button className='btn btn-danger' onClick={(e)=>handleDelete(phrase._id)}>Delete</button></td>
                            </tr>
                            
                        })
                    }
    
                </tbody>
                
            </table>
    
        </div>
    </div>
    )
}

export default Phrases