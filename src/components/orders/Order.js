import React from 'react'

const Order = props => (
    <div className='table-row-container order-container'>
        <div><span>{Intl.DateTimeFormat('sv-SE').format(props.date.seconds * 1000)}</span></div>
        <div><span>{props.product}</span></div>
        <div><span>{props.stock}</span></div>
        <div
            className={
                props.quantity > 0 ? 'positive' : 'negative'
            }
        >
            <span>{props.quantity}</span>
        </div>
    </div>
)

export default Order