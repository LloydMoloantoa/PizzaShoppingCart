const addBtn49 = document.querySelector('.addBtn49');
const addBtn79 = document.querySelector('.addBtn79');
const addBtn99 = document.querySelector('.addBtn99');

var subtractBtn49 = document.querySelector('.subtractBtn49');
var subtractBtn79 = document.querySelector('.subtractBtn79');
var subtractBtn99 = document.querySelector('.subtractBtn99');

var cartLargePizzaLbl = document.querySelector('.cartLargePizzaLbl');
var cartMediumPizzaLbl = document.querySelector('.cartMediumPizzaLbl');
var cartSmallPizzaLbl = document.querySelector('.cartSmallPizzaLbl');
var totalCostLbl = document.querySelector('.totalCostLbl');

var smallTotal = 0;
var mediumTotal = 0;
var largeTotal = 0;
var totalCost = 0;

addBtn49.addEventListener('click', function(){
    smallTotal += 49;
    cartSmallPizzaLbl.innerHTML = "R " + smallTotal.toFixed(2);
    totalCost += smallTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
    alert("Order added");
});

addBtn79.addEventListener('click', function(){
    mediumTotal += 79;
    cartMediumPizzaLbl.innerHTML = "R " + mediumTotal.toFixed(2);
    totalCost += mediumTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
    alert("Order added");
});

addBtn99.addEventListener('click', function(){
    largeTotal += 99;
    cartLargePizzaLbl.innerHTML = "R " + largeTotal.toFixed(2);
    totalCost += largeTotal;
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
    alert("Order added");
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

