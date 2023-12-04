import React from 'react'

function SignCard(props) {
  return (
    <div className='carousel-card'>
        <img  height={200} className='product-image'
        src={props.image}
        alt='product'/>
        <h2 className='carousel-title'>{props.title}</h2>
    </div>
  )
}

export default SignCard