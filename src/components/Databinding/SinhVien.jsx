import React, { Component } from 'react'

export default class SinhVien extends Component {

    //Thuộc tính hoTen, lop thuộc class SinhVien
    hoTen = 'Nguyễn Văn A';
    lop = 'FrontEnd xxx';
    // tenTrungTam = 'CYBERSOFT';
    renderThongTinSinhVien = (tenTrungTam) =>{
        return (
                <ul>
                    <li>Họ tên: {this.hoTen} </li>
                    <li>Lớp: {this.lop} </li>
                    <li>Trung tâm: {tenTrungTam}</li>
                </ul>
        )
    }

    //Phương thức render là phương thức thuộc class SinhVien
    render() {
        //Biến của hàm render
        const tenTrungTam = 'CYBERSOFT';
        return (
            <div className="container">
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}
