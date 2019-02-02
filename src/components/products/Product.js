import React from 'react'

const Product = props => (
    <div>
        <span>{props.id}</span>
        <span>{props.name}</span>
        <span>{props.price}</span>
    </div>
    )

export default Product