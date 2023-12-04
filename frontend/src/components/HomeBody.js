import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_IP } from '../pages/IP'
import { responsive } from '../pages/IP'
import ProductCard from '../components/ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs'
import EventCard from './EventCard'
import SignCard from './SignCard'
import PhraseCard from './PhraseCard'

function HomeBody() {

    const [products, setProducts] =useState([{
    }])
    const [events, setEvents] =useState([{
    }])
    const [signs, setSigns] =useState([{
    }])
    const [phrases, setPhrases] =useState([{
    }])
    const [productCount, setProductCount] = useState()
    const [eventCount, setEventCount] = useState()
    const [signCount, setignCount] = useState()
    const [phraseCount, setPhraseCount] = useState()
    const navigate = useNavigate()

    useEffect(()=>{      
        const token = localStorage.getItem('token');
        if(!token){
            
                navigate('/login')
        }   
        else{
                populateProducts(token);
                populateEvents(token)
                populateSigns(token)
                populatePhrases(token)
            }
        }
    
    ,[])

    async function populateProducts(token){
        const req = await fetch(`http://${SERVER_IP}/products`, {
            method:'GET',
            
        })
    
        const data = await req.json();
        if(data.status ==='ok'){
            setProductCount(data.results)
            setProducts(data.products)
        }
        else{
            alert(data.error)
        }
    }
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
            setEventCount(data.results)
        }
        else{
            alert(data.error)
        }
    }
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
            setignCount(data.results)
        }
        else{
            alert(data.error)
        }
    }
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
            setPhraseCount(data.results)
        }
        else{
            alert(data.error)
        }
    }
    const productMap = products.map((item)=>(
        <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}
            />
    ))
    const eventMap = events.map((item)=>(
        <EventCard
            title={item.title}
            image={item.image}
            date={item.date}/>
    ))
    const signMap = signs.map((item)=>(
        <SignCard
        title={item.title}
        image={item.image}
        />
    ))
    const phraseMap = phrases.map((item)=>(
        <PhraseCard
        title={item.title}
        image={item.image}
        />
    ))
    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{productCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EVENTS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{eventCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SIGNS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{signCount}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PHRASES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{phraseCount}</h1>
            </div>
            
        </div>

        <div className='main-title'>
            <h3>PRODUCTS</h3>
        </div>
        <div className='carousel'>
            <Carousel responsive={responsive}>{productMap}</Carousel>

        </div>
        <br/>

        <div className='main-title'>
            <h3>EVENTS</h3>
        </div>
        <div className='carousel'>
            <Carousel responsive={responsive}>{eventMap}</Carousel>

        </div>
        <div className='main-title'>
            <h3>SIGNS</h3>
        </div>
        <div className='carousel'>
            <Carousel responsive={responsive}>{signMap}</Carousel>

        </div>
        <div className='main-title'>
            <h3>PHRASES</h3>
        </div>
        <div className='carousel'>
            <Carousel responsive={responsive}>{phraseMap}</Carousel>

        </div>

    </main>
  )
}

export default HomeBody