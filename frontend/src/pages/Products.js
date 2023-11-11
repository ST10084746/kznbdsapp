import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] =useState([{
}])
const navigate = useNavigate()

async function populatePosts(token){
    const Autheader = ()=> `Bearer ${token}`
    const req = await fetch('http://localhost:3000/products', {
        method:'GET',
        headers:{
            'Authorization': Autheader(),
        },
    })

    const data = await req.json();
    if(data.status ==='ok'){
        setProducts(data.products)
    }
    else{
        alert(data.error)
    }
}
async function handleDelete(productId){
    const Autheader = ()=> `Bearer ${localStorage.getItem('token')}`
    const req = await fetch(`http://localhost:3000/products/${productId}`, {
        method:'DELETE',
        headers:{
            'Authorization': Autheader(),
        },
        
    })

    const data = await req.json();
    if(data.status ==='ok'){
        populatePosts()
    }
    else{
        alert(data.error)
        navigate('/login')
    }

}
useEffect(()=>{      
    const token = localStorage.getItem('token');
    if(!token){
        
            navigate('/login')
    }   
    else{
            populatePosts(token);
        }
    }

,[])
return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <Link to="/createProduct" className='btn btn-success'> Add +</Link>
        <Link to="/events" className='btn btn-success'> Show Events</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>

                </tr>

            </thead>
            <tbody>
                {
                    products.map((product)=>{
                        return <tr>
                            <td>{product.image===''|| product.image===null?
                                <img width={100} height={100} alt='product' src={'../reg No.PNG'}/>:
                                <img width={100} height={100} alt='product' src={product.image}/>}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><button className='btn btn-danger' onClick={(e)=>handleDelete(product._id)}>Delete</button></td>
                        </tr>
                        
                    })
                }

            </tbody>
            
        </table>

    </div>
</div>
)
}

export default Products