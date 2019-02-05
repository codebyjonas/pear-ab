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
                :
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
        }
    </div>
)

export default Stocks