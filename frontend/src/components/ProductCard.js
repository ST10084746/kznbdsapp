import React from 'react'

function ProductCard(props) {
  return (
    <div className='carousel-card'>
        <img  height={200} className='product-image'
        src={props.image}
        alt='product'/>
        <h2 className='carousel-title'>{props.title}</h2>
        <h4 className='product-price'>R{props.price}</h4>

    </div>
  )
}

export default ProductCard