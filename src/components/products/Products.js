import React from 'react'
import Product from './Product'
import ProductsHeader from './ProductsHeader'

const Products = props => (
    <div>
        <ProductsHeader />
        {
            props.products.length > 0 ?
                props.products.map((product) =>
                    <Product
                        key={product.product_id}
                        id={product.product_id}
                        name={product.name}
                        price={product.price}
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

export default Products