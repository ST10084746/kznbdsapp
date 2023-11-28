import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SERVER_IP } from './IP'

function CreateSigns() {
    const[image, setImage] = useState('')
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const navigate =  useNavigate();
    const token = localStorage.getItem('token');

    useEffect(()=>{      
        const token = localStorage.getItem('token');
        if(!token){
            
                navigate('/login')
        }   
        }

    ,[])

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            console.log(reader.result);
            setImage(reader.result);
        }
        reader.onerror = error=>{
            console.log('Error', error);
            alert("Failed to Upload Image")
        }
    }

    async function Submit(e){
        e.preventDefault()
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
                description,
                
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
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2> Add Sign</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input type='text'
                      placeholder='Title'
                      className='form-control'
                       value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      pattern=".{3,}"
                      title="Post title should have three or more characters"/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Content</label>
                    <input
                     type='text'
                     placeholder='Description'
                      className='form-control'
                     onChange={(e)=> setDescription(e.target.value)}
                     value={description}
                     pattern=".{1,}"
                      title="Post content should have ten or more characters"/>
                </div>
                
                <div className='mb-2'>
                    <label htmlFor=''>Title</label>
                    <input
                        accept='image/*'
                        type='file'
                        className='form-control'
                        onChange={convertToBase64}
                        />
                </div>
                <button className='btn btn-success my-2 btn-lg w-100' type='submit'>Create</button>
                <Link to="/signs" className='btn btn-danger my-2 btn-lg w-100'> Cancel</Link>
            </form>
        </div>
    </div>
  )
}

export default CreateSigns