import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    

    renderSanPham = () => {
        //lấy giá trị mảng sản phẩm từ component cha truyền vào thông qua thuộc tính this.props
        let {mangSanPham} = this.props;
        return  mangSanPham.map((sp,index) => {
            return ( 
                    <Product sanPham={sp} key={index}></Product>
            ) 
        })
        
    }

    render() {
       


        return (
            <div className="container">
                <h3 className="text-center">BEST SMARTPHONE</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
