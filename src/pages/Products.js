import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import Product from '../components/products/Product'

class Products extends React.Component {

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
            console.log(products[0].name)
            this.setState({ products: products })
        })
    }

    componentDidMount() {
        this.getProductsFromFirebase()
    }


    render() {
        console.log(this.state.products)
        return (
            <div>
                <Header title={this.props.title} />
                {
                    this.state.products.length > 0 ?
                        this.state.products.map( (product) =>
                            <Product key={product.product_id} id={product.product_id} name={product.name} price={product.price} />
                        )
                        : <h2>Inga produkter tillängliga</h2>
                }
            </div>
        )
    }
}

export default Products