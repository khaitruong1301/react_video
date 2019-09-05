import React, { Component } from 'react'
import data from '../../data/data.json';


export default class BaiTapVongLap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }

    renderMangPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.biDanh} width={200} height={350} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substr(0,100) + '...' : phim.moTa}</p>
                    </div>
                </div>

            )
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderMangPhim()} */}
                    {
                        this.state.mangPhim.map((phim, index) => {
                            return (
                                <div className="card col-4" key={index}>
                                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.biDanh} width={200} height={350} />
                                    <div className="card-body">
                                        <h4 className="card-title">{phim.tenPhim}</h4>
                                        <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substr(0,100) + '...' : phim.moTa}</p>
                                    </div>
                                </div>
                
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
