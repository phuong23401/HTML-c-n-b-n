let inputWidth;
let inputHeight;

inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;

document.write("The width is: " + width);
document.write("<br>")
document.write("The height is: " + height);
document.write("<br>")
document.write("The area is: " + area);