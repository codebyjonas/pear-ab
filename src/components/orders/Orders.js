import React from 'react'
import Order from './Order'
import OrdersHeader from './OrdersHeader'

const Orders = props => (
    <div>
        <OrdersHeader />
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
                : <h2>Inga ordrar tillängliga</h2>
        }
    </div>
)

export default Orders