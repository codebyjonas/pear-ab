import React from 'react'

class StockCount extends React.Component {

    render() {
        let quantityStatus = 'good'
        if (this.props.count < this.props.lowQuantity) {
            quantityStatus = 'danger'
        } else if (this.props.count < this.props.medQuantity) {
            quantityStatus = 'warning'
        }

        return (
            <div className='table-row-container stock-count-container'>
                <div><span>{this.props.product}</span></div>
                <div><span>{this.props.stock}</span></div>
                <div data-type={quantityStatus}><span>{this.props.count}</span></div>
            </div>
        )

    }
}

export default StockCount