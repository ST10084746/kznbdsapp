import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SERVER_IP } from './IP'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import AddProduct from '../components/addProduct'

function Products() {
  const [products, setProducts] =useState([{
}])
const navigate = useNavigate()
const token = localStorage.getItem('token');

async function populateProducts(token){
    const Autheader = ()=> `Bearer ${token}`
    const req = await fetch(`http://${SERVER_IP}/products`, {
        method:'GET',
        
    })

    const data = await req.json();
    if(data.status ==='ok'){
        setProducts(data.products)
    }
    else{
        alert(data.error)
    }
}
async function CreateProduct(title, image, description, price){
    
    const Autheader = ()=> `Bearer ${token}`
    const req = await fetch(`http://${SERVER_IP}/products`, {
        method:'POST',
        crossDomain:true,
        headers:{
            'Content-Type': 'application/json',
            'Authorization': Autheader(),
        },
        body: JSON.stringify({
            image:image,
            title :title,
            description: description,
            price: price,
        })
    })

    const data = await req.json();
    if(data.status ==='ok'){
        populateProducts()
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
async function handleDelete(productId){
    const Autheader = ()=> `Bearer ${localStorage.getItem('token')}`
    const req = await fetch(`http://${SERVER_IP}/products/${productId}`, {
        method:'DELETE',
        headers:{
            'Authorization': Autheader(),
        },
        
    })

    const data = await req.json();
    if(data.status ==='ok'){
        populateProducts()
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
            populateProducts(token);
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
                    <h1>Products</h1>
                    <AddProduct CreateProduct = {CreateProduct}/>
                </section>
                <section className='table-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>

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

                </section>
            </div>
        </main>
    </div>

)
}

export default Products