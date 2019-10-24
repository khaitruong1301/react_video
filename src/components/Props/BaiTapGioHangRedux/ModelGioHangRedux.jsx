import React, { Component } from 'react';
import { connect } from 'react-redux'

class ModelGioHangRedux extends Component {


    renderGioHang = () => {
        //this.props.gioHang là thuộc tính nhận từ redux
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={75} height={50} /></td>
                <td>{spGH.giaBan}</td>
                <td>
                    <button onClick={() => this.props.tangGiamSoLuong(index, true)}>+</button>
                    {spGH.soLuong}
                    <button onClick={() => this.props.tangGiamSoLuong(index, true)}>-</button>


                </td>

                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHangIndex(index)}>Xóa</button>
                    <button className="btn btn-danger" onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)}>Xóa Mã SP</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Mã SP</td>
                            <td>Tên SP</td>
                            <td>Hình ảnh</td>
                            <td>Giá bán</td>
                            <td>Số lượng</td>
                            <td>Thành tiền</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>
                                {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                    return tongTien += spGioHang.soLuong * spGioHang.giaBan;
                                }, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => { //state: là store tổng, => truy xuất đến GioHangReducer => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang //Tạo ra 1 props của component ModalGioHangRedux
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index
            }
            //Đưa action lên reducer
            dispatch(action)
        },
        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MSP',
                maSP
            }
            dispatch(action)
        },
        tangGiamSoLuong: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelGioHangRedux)