import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import Orders from '../components/orders/Orders'
import NewOrder from '../components/orders/NewOrder';

class OrdersPage extends React.Component {

    constructor(props) {
        super(props)
        this.setOrderBy = this.setOrderBy.bind(this)
    }
    state = {
        orders: [],
        orderBy: 'date'
    }

    setOrderBy(newOrderBy) {

        this.setState({orderBy: newOrderBy }, () => this.getProductsFromFirebase())
    }

    getProductsFromFirebase() {
        const db = firebase.firestore()
        let orders = []
        db.collection('orders').orderBy(this.state.orderBy).onSnapshot((snapshot) => {
            orders = []
            snapshot.docs.forEach(doc => {
                let order = doc.data()
                orders.push(order)
            })
            this.setState({ orders: [] })
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
                    <Orders orders={this.state.orders} setOrderBy={this.setOrderBy} />
                    <NewOrder />
                </div>
            </div>
        )
    }
}

export default OrdersPage