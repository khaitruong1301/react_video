import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        let { sanPham, xemChiTiet } = this.props;


        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" >
                        <img className="card-img-top" src={sanPham.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                            <p className="card-text">{sanPham.gia}</p>
                            <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#modelId" onClick={() => {xemChiTiet(sanPham)}}>Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
