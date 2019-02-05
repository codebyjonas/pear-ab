import React from 'react'
import Order from './Order'
import OrdersHeader from './OrdersHeader'

const Orders = props => (
    <div>
        <OrdersHeader setOrderBy={props.setOrderBy}/>
        {
            props.orders.length > 0 ?
                props.orders.map((order) =>
                    <Order
                        date={order.date}
                        key={order.date}
                        product={order.product}
                        quantity={order.quantity}
                        stock={order.stock}
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

export default Orders