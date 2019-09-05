import React, { Component } from 'react'

export default class DemoVongLap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'IPhone x', gia: 1000 },
                { maSP: 2, tenSP: 'Samsung galaxy note 10 plus', gia: 2000 },
                { maSP: 3, tenSP: 'Huawei P30 Pro', gia: 3000 }
            ]
        }
    }

    //Viết phương thức render các sản phẩm thành các tag tr
    renderSanPham = () => {
        //Cách 2 sử dụng map để tạo động các tag jsx từ mảng 
       return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}</td>
                </tr>
            )
        })
    }

    render() {

        
        return (
            <div className="container">
                <h3 className="bg-dark p-5 text-center text-white">Demo vòng lặp React</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSanPham()}
                      
                    </tbody>
                </table>
            </div>
        )
    }
}
