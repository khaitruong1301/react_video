import React from 'react';

import './App.css';
import BaiTapComponent from './components/BaiTap/BaiTapComponent';
import SinhVien from './components/Databinding/SinhVien';
import Event from './components/Databinding/Event';
import DemoIf from './components/CauTrucDieuKhien_Rerender/DemoIf';
import BaiTapState from './components/CauTrucDieuKhien_Rerender/BaiTapState';


function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent /> */}
      {/* <SinhVien /> */}
      {/* <Event /> */}
      {/* <DemoIf /> */}
      <BaiTapState />
    </div>
  );
}

export default App;
