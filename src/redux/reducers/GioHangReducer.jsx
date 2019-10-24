const stateGioHang = {
    gioHang: [{ maSP: 1, tenSP: 'IPhone', hinhAnh: './img/sp_iphoneX.png', soLuong: 1, giaBan: 1, thanhTien: 1000 }]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong +=1;
            }else{
                gioHangCapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'XOA_GIO_HANG':{
            let gioHangCapNhat = [...state.gioHang];
            //Xóa giỏ hàng dựa vào index
            gioHangCapNhat.splice(action.index,1);
            //Gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA_GIO_HANG_MSP': {
            let gioHangCapNhat = [...state.gioHang];
            //tìm index sp dựa vào masp
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);

            //xóa giỏ hàng dựa vào index 
            gioHangCapNhat.splice(index,1);
            //Gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'TANG_GIAM_SL':{
            const {index,tangGiam} = action;
            console.log(action);
            let gioHangCapNhat = [...state.gioHang];
            //tìm index sp dựa vào masp
           if(tangGiam){
               gioHangCapNhat[index].soLuong += 1;
           }else {
               if(gioHangCapNhat[index].soLuong >1 ){
                   gioHangCapNhat[index].soLuong -= 1;
               }
           }
           //cập nhật lại state của gioHangReducer 
           state.gioHang = gioHangCapNhat;
           return {...state};
        }

    }
    return { ...state }
}

 