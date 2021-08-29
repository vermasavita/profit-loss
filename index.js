var initialPrice = document.querySelector("#initial-price");
var quantityOfstock = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
var tellMeBtn = document.querySelector("#tellme-btn");
var outputMessage = document.querySelector("#output-message");

tellMeBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = initialPrice.value;
    var qty = quantityOfstock.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip, qty, curr);

}

function calculateProfitAndLoss(initial, quantity, current) {
    if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showMessage(`The profit is ${profit} and the ${profitPercentage}%`);
    } else if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showMessage(`The loss is ${loss} and the ${lossPercentage}%`);

    } else {
        showMessage("No pain no gain, no gain no pain");
    }

}

function showMessage(message) {
    outputMessage.innerHTML = message;
}
