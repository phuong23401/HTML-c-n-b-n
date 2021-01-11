const tigiaUSDVND = 23000;
const tigiaGBPVND = 31400;
const tigiaRUBVND = 313.97;
const tigiaEURVND = 28400;

function convert(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let result = 0;

    if (from === 'vnd') {

        switch (to) {
            case 'usd':
                result = amount / tigiaUSDVND;
                break;
            case 'gbp':
                result = amount / tigiaGBPVND;
                break;
            case 'rub':
                result = amount / tigiaRUBVND;
                break;
            case 'eur':
                result = amount / tigiaEURVND;
                break;
            default:
                result = amount;
        }

    }

    if (from === 'usd') {

        switch (to) {
            case 'vnd':
                result = amount * tigiaUSDVND;
                break;
            case 'gbp':
                result = tigiaUSDVND / tigiaGBPVND;
                break;
            case 'rub':
                result = tigiaUSDVND / tigiaRUBVND;
                break;
            case 'eur':
                result = tigiaUSDVND / tigiaEURVND;
                break;
            default:
                result = amount;
        }
    }

    if (from === 'gbp') {

        switch (to) {
            case 'vnd':
                result = amount * tigiaGBPVND;
                break;
            case 'usd':
                result = tigiaGBPVND / tigiaUSDVND;
                break;
            case 'rub':
                result = tigiaGBPVND / tigiaRUBVND;
                break;
            case 'eur':
                result = tigiaGBPVND / tigiaEURVND;
                break;
            default:
                result = amount;
        }
    }

    if (from === 'rub') {

        switch (to) {
            case 'vnd':
                result = amount * tigiaRUBVND;
                break;
            case 'gbp':
                result = tigiaRUBVND / tigiaGBPVND;
                break;
            case 'usd':
                result = tigiaRUBVND / tigiaUSDVND;
                break;
            case 'eur':
                result = tigiaRUBVND / tigiaEURVND;
                break;
            default:
                result = amount;
        }
    }

    if (from === 'eur') {

        switch (to) {
            case 'vnd':
                result = amount * tigiaEURVND;
                break;
            case 'gbp':
                result = tigiaEURVND / tigiaGBPVND;
                break;
            case 'rub':
                result = tigiaEURVND / tigiaRUBVND;
                break;
            case 'usd':
                result = tigiaEURVND / tigiaUSDVND;
                break;
            default:
                result = amount;
        }
    }


        document.getElementById("result").textContent = "Result: " + result + ' ' + to;
}
