import React from 'react'
import Stock from './Stock'
import StocksHeader from './StocksHeader'

const Stocks = props => (
    <div>
        <StocksHeader />
        {
            props.stocks.length > 0 ?
            props.stocks.map((stock) =>
                <Stock
                    key={stock.id}
                    id={stock.id}
                    city={stock.city}
                />
            )
            : <h2>Inga färdigvarulager tillängliga</h2>
        }
    </div>
)

export default Stocks