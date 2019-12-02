import React, { Component } from 'react';
import {connect} from 'react-redux';

class FormSinhVien extends Component {

    state = {
        maSV:'',
        hoTen:'',
        email:'',
        soDienThoai:''
    }

    handleChange = (e) => {
        //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let {name,value} = tagInput;
        this.setState({
            [name]:value
        },()=>{
            console.log(this.state);
        })
     
    }

    handleSubmit = (e) => {
        e.preventDefault(); //Cản sự kiện submit reload trang của browser
        this.props.themSinhVien(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white"><h3>Thông tin sinh viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã SV</span>
                                    <input className="form-control" name="maSV" value={this.state.maSV} onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ tên</span>
                                    <input className="form-control" name="hoTen" value={this.state.hoTen} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-6">
                                    <span>Số điện thoại</span>
                                    <input className="form-control" name="soDienThoai" value={this.state.soDienThoai}  onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-success">Thêm sinh viên</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type:'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps) (FormSinhVien)