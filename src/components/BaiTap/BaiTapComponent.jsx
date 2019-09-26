import React, { Component } from 'react'
import Header from './Header';
import Slider from './Slider';
import ProductList from './ProductList';
import Footer from './Footer';
import Modal from './Modal';

export default class BaiTapComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sanPhamModal: { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 }//Tạo nguồn dữ liệu thay đổi
        }
    }
    
    
    mangSanPham = [
        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 }
    ]

    //Dữ liệu cần nhận ở đâu thì mình sẽ tạo callback function tại component đó
    xemChiTiet = (sanPhamChiTiet) => {
        this.setState({
            sanPhamModal: sanPhamChiTiet
        })
    }

    render() {

        return (
            <div>
                <Header />
                <Slider />
                <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet} />
                {/* <ProductList mangSanPham={this.mangSanPham}/> */}
                <Footer />
                <Modal sanPhamModal = {this.state.sanPhamModal}/>
            </div>
        )
    }
}
