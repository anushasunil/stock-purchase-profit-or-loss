
var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var btnSubmit = document.querySelector("#btn-submit");
var outputMessage = document.querySelector(".output-message");
var body = document.querySelector(".body");
var heading = document.querySelector(".heading");

console.log(initialPrice.value, stockQuantity.value, currentPrice.value)

function calculateProfitAndLoss(initial, quantity, current)
{
    console.log(typeof initial, quantity, current)
    if(initial > current)
    {
        console.log("first if block");
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        changeBackground("loss")
        

        return "The loss is "+ loss + " and " + lossPercentage + "% 😥";
    }
    else if (current > initial)
    {
        console.log("second if block");
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        changeBackground("profit")

        return "The profit is "+ profit + " and " + profitPercentage + "% 😃";
    }
    else
    {
        console.log("else")
        changeBackground("")
        return "🙂";
    }
}

btnSubmit.addEventListener("click", function clickHandler()
{
    let initial = Number(initialPrice.value);
    let quantity = Number(stockQuantity.value);
    let current = Number(currentPrice.value);

    if(initial && quantity && current)
    {
        outputMessage.innerText = calculateProfitAndLoss(initial, quantity, current);
        
    }
    else
    {
        outputMessage.innerText = "Please fill all the fields";
    }

})

function changeBackground(status)
{
    if( status === "loss")
    {
        body.style.backgroundColor = "red";
        heading.style.color = "antiquewhite";
    }
    else if( status === "profit")
    {
        body.style.backgroundColor = "green";
        heading.style.color = "antiquewhite";
    }
    else
    {
        body.style.backgroundColor = "cornsilk";
        heading.style.color = "black";

    }
}