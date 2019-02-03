import React from 'react'

const StockCount = props => (
    <div className='table-row-container stock-count-container'>
        <div><span>{props.product}</span></div>
        <div><span>{props.stock}</span></div>
        <div><span>{props.count}</span></div>
    </div>
    )

export default StockCount