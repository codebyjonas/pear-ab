import React from 'react'

const Stocks = props => (
    <div className='table-row-container stock-container'>
        <div><span>{props.id}</span></div>
        <div><span>{props.city}</span></div>
    </div>
    )

export default Stocks