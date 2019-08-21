import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">BEST SMARTPHONE</h3>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}
