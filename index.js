var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var label = document.querySelectorAll("label");

var btnSubmit = document.querySelector("#btn-submit");
var outputMessage = document.querySelector(".output-message");
var body = document.querySelector(".body");
var heading = document.querySelector(".heading");
var container = document.querySelector(".container");
var footer = document.querySelector("footer");
var links = document.querySelectorAll(".link");


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial).toFixed(2);
        changeBackground("loss")


        return "The loss is  ₹ " + loss + " and " + lossPercentage + "% 😥";
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial).toFixed(2);
        changeBackground("profit")

        return "The profit is  ₹ " + profit + " and " + profitPercentage + "% 😃";
    } else {
        changeBackground("")
        return "No gain No pain 🙂";
    }
}

btnSubmit.addEventListener("click", function clickHandler() {
    let initial = Number(initialPrice.value);
    let quantity = Number(stockQuantity.value);
    let current = Number(currentPrice.value);

    if (initial && quantity && current) {
        outputMessage.innerText = calculateProfitAndLoss(initial, quantity, current);

    } else {
        outputMessage.innerText = "Please fill all the fields properly";
    }

})

function changeBackground(status) {
    if (status === "loss") {
        body.style.backgroundColor = "#990000";
        paintItWhite();

    } else if (status === "profit") {
        body.style.backgroundColor = "#134d00";
        paintItWhite();

    } else {
        body.style.backgroundColor = "cornsilk";
        paintItBlack();
    }
    
}

function paintItWhite() {
    heading.style.color = "white";
    body.style.borderColor = "white";
    outputMessage.style.color = "white";
    container.style.borderColor = "white";
    footer.style.color = "white";
    links[0].style.color = "white";
    links[1].style.color = "white";
    links[2].style.color = "white";

    label[0].style.color = "white";
    label[1].style.color = "white";
    label[2].style.color = "white";
}


function paintItBlack() {
    heading.style.color = "black";
    body.style.borderColor = "black";
    outputMessage.style.color = "black";

    label[0].style.color = "black";
    label[1].style.color = "black";
    label[2].style.color = "black";
}