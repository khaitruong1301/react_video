import {combineReducers} from 'redux';
import {GioHangReducer} from '../reducers/GioHangReducer'


//store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer
})