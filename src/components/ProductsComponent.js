import React, { Component } from 'react'
import productsData from '../vschoolProducts'
import Product from './ProductComponent'

export default class Products extends Component {
    render() {
        const products = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
        return (
            <>
                <h3 className="m-3">Cards are rendered from data-file and layouted with grid:</h3>
                <div className="prosucts">
                    {products}
                </div>
            </>
        );
    }
}