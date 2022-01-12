let initialPrice = document.querySelector("#initial-price");
let quantityOfstock = document.querySelector("#quantity-stock");
let currentPrice = document.querySelector("#current-price");
let tellMeBtn = document.querySelector("#tellme-btn");
let outputMessage = document.querySelector("#output-message");

const submitHandler = () => {
    let ip = Number(initialPrice.value);
    let qty = Number(quantityOfstock.value);
    let curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);

}

const calculateProfitAndLoss = (initial, quantity, current)=>{
    if (current > 0 && initial > 0 && quantity >0) {
        if (current > initial) {
            let profit = (current - initial) * quantity;
            let profitPercentage = (profit / initial) * 100;
            showMessage(`The profit is ${profit} and the ${profitPercentage}%`);
        } else if (initial > current) {
            let loss = (initial - current) * quantity;
            let lossPercentage = (loss / initial) * 100;
            showMessage(`The loss is ${loss} and the ${lossPercentage}%`);

        } else {
            showMessage("No pain no gain, no gain no pain");
        }
    }else{
        showMessage("Enter valid number");
    }


}

const showMessage = (message) => {
    outputMessage.innerHTML = message;
}

tellMeBtn.addEventListener('click', submitHandler);
