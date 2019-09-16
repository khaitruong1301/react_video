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
      <BaiTapTruyenFunction />

    </div>
  );
}

export default App;
