

const stateDefault = {
    mangSinhVien: [{maSV:1,hoTen:'nguyễn văn a',soDienThoai:'0909090909',email:'abc@gmail.com'}]
}


export const QuanLySinhVienReducer = (state = stateDefault, action ) => {

    switch(action.type)
    {
        case 'THEM_SINH_VIEN' : {
            //Thêm dữ liệu sinh viên vào mangSinhVien
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return {...state};
           
        };break;
        default: {
            return {...state}
        }
    }

}