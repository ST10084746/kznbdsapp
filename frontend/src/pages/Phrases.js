import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVER_IP } from './IP';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AddPhrase from '../components/AddPhrase';

function Phrases() {
    const [phrases, setPhrases] =useState([{
    }])
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    
    async function populatePhrases(token){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/phrases`, {
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
    async function CreatePhrase(title, image){
        const Autheader = ()=> `Bearer ${token}`
        const req = await fetch(`http://${SERVER_IP}/phrases`, {
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
    async function handleDelete(phraseId){
        const Autheader = ()=> `Bearer ${localStorage.getItem('token')}`
        const req = await fetch(`http://${SERVER_IP}/phrases/${phraseId}`, {
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
    
    )
    return (
    <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <main className='table-home'>
            <div className='table'>
                <section className='table-header'>
                    <h1>Phrases</h1>
                    <AddPhrase CreatePhrase = {CreatePhrase}/>
                </section>
                <section className='table-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Actions</th>   
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
                                        <td><button className='btn btn-danger' onClick={(e)=>handleDelete(phrase._id)}>Delete</button></td>
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

export default Phrases