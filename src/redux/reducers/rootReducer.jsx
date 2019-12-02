import {combineReducers} from 'redux';
import {GioHangReducer} from '../reducers/GioHangReducer';
import {BurgerReducer} from '../reducers/BurgerReducer';
import {QuanLySinhVienReducer} from '../reducers/QuanLySinhVienReducer';
//store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer,
  BurgerReducer,
  QuanLySinhVienReducer
})