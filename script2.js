const addBtn49 = document.querySelector('.addBtn49');
const addBtn79 = document.querySelector('.addBtn79');
const addBtn99 = document.querySelector('.addBtn99');
const payBtn = document.querySelector('.payBtn');

var subtractBtn49 = document.querySelector('.subtractBtn49');
var subtractBtn79 = document.querySelector('.subtractBtn79');
var subtractBtn99 = document.querySelector('.subtractBtn99');
var subtractBtnTotal = document.querySelector('.subtractBtnTotal');


var cartLargePizzaLbl = document.querySelector('.cartLargePizzaLbl');
var cartMediumPizzaLbl = document.querySelector('.cartMediumPizzaLbl');
var cartSmallPizzaLbl = document.querySelector('.cartSmallPizzaLbl');
var totalCostLbl = document.querySelector('.totalCostLbl');

var payAmountTxt = document.querySelector('.payAmountTxt')
var outPutLbl = document.querySelector('.outPutLbl');

var smallTotal = 0;
var mediumTotal = 0;
var largeTotal = 0;
var totalCost = 0;

addBtn49.addEventListener('click', function(){
    alert("Order added");
    smallTotal += 49;
    cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
    totalCost += smallTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
});

addBtn79.addEventListener('click', function(){
    alert("Order added");
    mediumTotal += 79;
    cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
    totalCost += mediumTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
});

addBtn99.addEventListener('click', function(){
    alert("Order added");
    largeTotal += 99;
    cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
    totalCost += largeTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
});

subtractBtn49.addEventListener('click', function(){
    if(smallTotal > 0){
        smallTotal -= 49;      
        cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
        totalCost -= 49;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    }
});

subtractBtn79.addEventListener('click', function(){
    if(mediumTotal > 0){
        mediumTotal -= 79;
        cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
        totalCost -= 79;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    }
});

subtractBtn99.addEventListener('click', function(){
    if(largeTotal > 0){ 
        largeTotal -= 99;
        cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
        totalCost -= 99;
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Order removed");
    } 
});

subtractBtnTotal.addEventListener('click', function(){
    if(totalCost > 0){ 
        totalCost = 0;
        smallTotal = 0;
        mediumTotal = 0;
        largeTotal = 0;
        cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
        cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
        cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
        alert("Total removed");
    } 
});

payBtn.addEventListener('click', function(){
    var payAmount = payAmountTxt.value;

    if(payAmount >= totalCost){
        outPutLbl.innerHTML = "order payed";
    }else{
        outPutLbl.innerHTML = "Insufficient funds";
    }
    });
