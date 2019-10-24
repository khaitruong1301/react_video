import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux';

export default class DanhSachSanPhamRedux extends Component {


    

    render() {
        const { mangSanPham } = this.props;

        return (
          <div className="container">
            <div className="row">
              {mangSanPham.map((sanPham, index) => {
                return (
                  <div className="col-4" key={index}>
                    <SanPhamRedux  sanPham={sanPham} />
                  </div>
                )
              })}
            </div>
          </div>)
          
    }
}
