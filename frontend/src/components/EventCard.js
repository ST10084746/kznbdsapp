import React from 'react'

function EventCard(props) {
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const date = new Date(props.date).toLocaleDateString('en-us', options)
  return (
    <div className='carousel-card'>
        <img  height={200} className='product-image'
        src={props.image}
        alt='product'/>
        <h2 className='carousel-title'>{props.title}</h2>
        <h5 className='event-date'>{date}</h5>

    </div>
  )
}

export default EventCard