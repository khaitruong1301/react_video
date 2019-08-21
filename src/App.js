import React from 'react';

import './App.css';
import BaiTapComponent from './components/BaiTap/BaiTapComponent';
import SinhVien from './components/Databinding/SinhVien';
import Event from './components/Databinding/Event';


function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent /> */}
      {/* <SinhVien /> */}
      <Event />
    </div>
  );
}

export default App;
