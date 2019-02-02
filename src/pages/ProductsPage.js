import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import Products from '../components/products/Products'

class ProductsPage extends React.Component {

    state = {
        products: []
    }

    getProductsFromFirebase() {
        const products = []
        const db = firebase.firestore()
        db.collection('products').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let product = doc.data()
                products.push(product)
            })
            this.setState({ products: products })
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
                    <Products products={this.state.products} />
                </div>
            </div>
        )
    }
}

export default ProductsPage