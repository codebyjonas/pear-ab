import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import Orders from '../components/orders/Orders'

class OrdersPage extends React.Component {

    state = {
        orders: []
    }

    getProductsFromFirebase() {
        const orders = []
        const db = firebase.firestore()
        db.collection('orders').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let order = doc.data()
                orders.push(order)
            })
            this.setState({ orders: orders })
        })
    }

    componentDidMount() {
        this.getProductsFromFirebase()
    }

    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <div className='page-container'>
                    <Orders orders={this.state.orders} />
                </div>
            </div>
        )
    }
}

export default OrdersPage