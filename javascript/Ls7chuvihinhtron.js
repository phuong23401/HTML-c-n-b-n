let pi = 3.14;
let inputbankinh;

inputbankinh = prompt("Mời nhập bán kính:");

let bankinh = parseInt(inputbankinh);
let chuvi = 2* pi * bankinh;

document.write("Bán kính hình tròn là: " + bankinh);
document.write("<br>");
document.write("Chu vi hình tròn là: " + chuvi);