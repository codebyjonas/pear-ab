import React from 'react'
import StockCount from './StockCount'
import StockCountsHeader from './StockCountsHeader'

class StockCounts extends React.Component {

    state = {
        lowQuantity: 10000,
        medQuantity: 500000,
        highQuantity: 100000
    }

    render() {
        return (
            <div>
                <StockCountsHeader />
                {
                    this.props.stocks.length > 0 ?
                        this.props.stocks.map((stockCount) =>
                            <StockCount
                                key={stockCount.id}
                                stock={stockCount.stock}
                                product={stockCount.product}
                                count={stockCount.count}
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
    }
}

export default StockCounts