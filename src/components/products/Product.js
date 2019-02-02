import React from 'react'

const Product = props => (
    <div className='product-container'>
        <div><span>{props.id}</span></div>
        <div><span>{props.name}</span></div>
        <div><span>{props.price} kr</span></div>
    </div>
    )

export default Product