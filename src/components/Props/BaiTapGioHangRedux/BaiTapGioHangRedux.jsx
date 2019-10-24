import React, { Component } from 'react';
import phoneData from '../../../data/phoneData.json';
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux.jsx';
import ModelGioHangRedux from './ModelGioHangRedux.jsx';


export default class BaiTapGioHangRedux extends Component {


    


    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập giỏ hàng redux</h3>
                <ModelGioHangRedux  />
                <DanhSachSanPhamRedux mangSanPham={phoneData} />
                
            </div>
        )
    }
}
