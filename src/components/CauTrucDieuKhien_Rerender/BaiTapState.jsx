import React, { Component } from 'react'

export default class BaiTapState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: './img/imgRedCar.jpg'
        }
    }

    changeColor = (color) => {
        let imgSource = '';
        switch (color) {
            case 'red': {
                imgSource = './img/imgRedCar.jpg';
            }; break;
            case 'silver': {
                imgSource = './img/imgSilverCar.jpg';
            }; break;
            case 'black': {
                imgSource = './img/imgBlackCar.jpg';
            }
        }
        //Gọi phương thức setState để truyền imgSource mới từ sự kiện click của button => render lại giao diện với source mới
        this.setState({
            img: imgSource
        })
    }

    render() {
        const styleButton = {
            color: '#fff',
            marginRight: '5px'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        {/* Hiển thị hình của xe */}
                        <h3>Please choose your favorite about car's color</h3>
                        <img src={this.state.img} width={400} height={200} />
                    </div>
                    <div className="col-md-5">
                        <h3>Change color</h3>
                        <button onClick={() => this.changeColor('red')} className="btn btn-danger" style={styleButton}>Red color</button>
                        <button onClick={() => this.changeColor('silver')} className="btn btn-dark" style={styleButton}>Silver color</button>
                        <button onClick={() => this.changeColor('black')} className="btn " style={{ color: '#fff', backgroundColor: '#000' }}>Black color</button>
                    </div>
                </div>
            </div>
        )
    }
}