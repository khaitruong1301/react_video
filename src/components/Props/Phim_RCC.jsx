import React, { Component } from 'react'

export default class Phim_RCC extends Component {

    constructor(props) {
        super(props);
        
    }
    

    render() {

        const {phim_input} = this.props;
        const {hinhAnh,tenPhim,moTa} = this.props.phim_input;

        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <p className="card-text">{moTa}</p>
                    <button>Chi tiết phim</button>
                </div>
            </div>

        )
    }
}
