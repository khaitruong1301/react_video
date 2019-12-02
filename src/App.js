import React from 'react';

import './App.css';
import BaiTapComponent from './components/BaiTap/BaiTapComponent';
import SinhVien from './components/Databinding/SinhVien';
import Event from './components/Databinding/Event';
import DemoIf from './components/CauTrucDieuKhien_Rerender/DemoIf';
import BaiTapState from './components/CauTrucDieuKhien_Rerender/BaiTapState';
import DemoVongLap from './components/CauTrucLap/DemoVongLap';
import BaiTapVongLap from './components/BaiTap2/BaiTapVongLap';
import DemoProps from './components/Props/DemoProps';
import BaiTapTruyenFunction from './components/Props/BaiTapTruyenFunction/BaiTapTruyenFunction';
import BaiTapGioHang from './components/Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapGioHangRedux from './components/Props/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapBurger from './components/Props/BaiTapBurger/BaiTapBurger';
import BaiTapForm from './components/BaiTapForm/BaiTapForm';


function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent /> */}
      {/* <SinhVien /> */}
      {/* <Event /> */}
      {/* <DemoIf /> */}
      {/* <BaiTapState /> */}
      {/* <DemoVongLap /> */}
      {/* <BaiTapVongLap /> */}
      {/* <DemoProps/> */}
      {/* <BaiTapTruyenFunction /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapBurger /> */}
      <BaiTapForm />
    </div>
  );
}

export default App;
