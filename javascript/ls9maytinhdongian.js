function inputNumber(numberId) {
    let oldInput = document.getElementById('input').value;
    let input = document.getElementById(numberId).innerHTML;
    let newInput = oldInput + input;

    document.getElementById('input').value = newInput;
}
//
// function input0(id1) {
//     let oldInput = document.getElementById('input').value;
//     let input = document.getElementById(id1).innerHTML;
//     let newInput = oldInput + input;
//
//     document.getElementById('input').value = newInput;
// }

function math(mathId) {
    let oldInput = document.getElementById('input').value;
    let input = document.getElementById(mathId).innerHTML;
    let newInput = oldInput + input;

    document.getElementById('input').value = newInput ;
}

