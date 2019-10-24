import React, { Component } from 'react'
import { connect } from 'react-redux';
 class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={200} height={300} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <h4 className="card-title">{sanPham.giaBan}</h4>

          <button className="btn btn-danger" onClick={()=> this.props.themGioHang(sanPham)}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}

//Xây dựng hàm tạo ra props là sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        giaBan: sanPham.giaBan
      }
      //Tạo action đưa dữ liệu lên reducer
      const action ={
        type:'THEM_GIO_HANG', //bắt buộc đặt type
        spGioHang //Nội dung gửi lên reducer
      }
      //Hàm dispatch dùng để đưa dữ liệu action lên reducer
      dispatch(action);
    }
    
  }
}
export default connect(null,mapDispatchToProps)(SanPhamRedux)