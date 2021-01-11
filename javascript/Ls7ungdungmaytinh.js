
function addition() {
    let futures1 = document.getElementById('futures1').value;
    let futures2 = document.getElementById('futures2').value;
    let addition = parseInt(futures1) + parseInt(futures2);
    document.getElementById('result').textContent = 'Result Division: ' + addition;
}

function subtraction() {
    let futures1 = document.getElementById('futures1').value;
    let futures2 = document.getElementById('futures2').value;
    let subtraction = parseInt(futures1) - parseInt(futures2);
    document.getElementById('result').textContent = 'Result Division: ' + subtraction;
}

function multiplication() {
    let futures1 = document.getElementById('futures1').value;
    let futures2 = document.getElementById('futures2').value;
    let multiplication = parseInt(futures1) * parseInt(futures2);
    document.getElementById('result').textContent = 'Result Division: ' + multiplication;
}

function division() {
    let futures1 = document.getElementById('futures1').value;
    let futures2 = document.getElementById('futures2').value;
    let division = parseInt(futures1) / parseInt(futures2);
    document.getElementById('result').textContent = 'Result Division: ' + division;
}