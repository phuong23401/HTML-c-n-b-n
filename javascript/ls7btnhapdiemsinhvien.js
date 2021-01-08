let inputDiemVatLi;
let inputDiemHoaHoc;
let inputDiemSinhHoc;

inputDiemVatLi = prompt("Mời nhập điểm Vật Lí");
inputDiemHoaHoc = prompt("Mời nhập điểm Hóa Học");
inputDiemSinhHoc = prompt("Mời nhập điểm Sinh Học");

let DiemVatLi = parseInt(inputDiemVatLi);
let DiemHoaHoc = parseInt(inputDiemHoaHoc);
let DiemSinhHoc = parseInt(inputDiemSinhHoc);
let DiemTrungBinh = (DiemHoaHoc + DiemSinhHoc + DiemVatLi)/3;
let TongDiem = DiemHoaHoc + DiemSinhHoc + DiemVatLi;

document.write("Điểm Vật Lí là: " + DiemVatLi);
document.write("<br>")
document.write("Điểm Hóa Học là: " + DiemHoaHoc);
document.write("<br>")
document.write("Điểm Sinh Học là: " + DiemSinhHoc);
document.write("<br>")
document.write("Điểm Trung Bình là: " + DiemTrungBinh);
document.write("<br>")
document.write("Tổng Điểm là: " + TongDiem);
