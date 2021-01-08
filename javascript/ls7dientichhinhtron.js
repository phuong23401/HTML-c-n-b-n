let pi = 3.14;
let inputbankinh;

inputbankinh = prompt("Mời nhập bán kính:");

let bankinh = parseInt(inputbankinh);
let dientich = pi * bankinh * bankinh;

document.write("Bán kính hình tròn là: " + bankinh);
document.write("<br>");
document.write("Diện tích hình tròn là: " + dientich);
