var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');


submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        //loss
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput(`Your loss is ${loss} and the percent is ${lossPercentage}%`, 'LOSS');
    } else if (current > initial) {
        //profit
        var profit = (current- initial)*quantity;
        var profitPercentage = ((profit/initial)*100).toFixed(2);

        showOutput(`Your profit is ${profit} and the percent is ${profitPercentage}%`,'PROFIT');
    } else {
        showOutput(`No pain no gain!!`, 'NOGAIN');

    }
}

function showOutput(message, status){
    switch (status) {
        case "PROFIT":
            outputBox.style.color = 'green';
            outputBox.innerText = message;
            
            break;
        
        case "LOSS":
            outputBox.style.color = 'red';
            outputBox.innerText = message;
            break;

        case "NOGAIN":
            outputBox.style.color = 'black';
            outputBox.innerText = message;
            break;
        default:
            break;
    }

    // outputBox.innerText = message;
}