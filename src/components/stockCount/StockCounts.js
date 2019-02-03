import React from 'react'
import StockCount from './StockCount'
import StockCountsHeader from './StockCountsHeader'

const StockCounts = props => (
    <div>
        <StockCountsHeader />
        {
            props.stocks.length > 0 ?
            props.stocks.map((stockCount) =>
                <StockCount
                    key={stockCount.id}
                    stock={stockCount.stock}
                    product={stockCount.product}
                    count={stockCount.count}
                />
            )
            : <h2>Inget lagersaldon tillängliga</h2>
        }
    </div>
)

export default StockCounts