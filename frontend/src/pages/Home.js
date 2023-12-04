import React from 'react'
import HomeBody from '../components/HomeBody'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <HomeBody/>
    </div>
  )
}

export default Home;