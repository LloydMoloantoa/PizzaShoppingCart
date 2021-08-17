const addBtn49c = document.querySelector('.addBtn49c');
const addBtn79c = document.querySelector('.addBtn79c');
const addBtn99c = document.querySelector('.addBtn99c');

var subtractBtn49c = document.querySelector('.subtractBtn49c');
var subtractBtn79c = document.querySelector('.subtractBtn79c');
var subtractBtn99c = document.querySelector('.subtractBtn99c');
const boxes = document.querySelectorAll('.boxShoppingCart');

var cartLargePizzaLblC = document.querySelector('.cartLargePizzaLbl');
var cartMediumPizzaLblC = document.querySelector('.cartMediumPizzaLbl');
var cartSmallPizzaLblC = document.querySelector('.cartSmallPizzaLbl');
var totalCostLblC = document.querySelector('.totalCostLbl');

smallTotal = 0;
mediumTotal = 0;
largeTotal = 0;
totalCost = 0;
let counter = 0;

addBtn49c.addEventListener('click', function(){
    alert("Order added");
     smallTotal += 49;
    totalCost += smallTotal;
   if(counter > 1){
    counter = 0;} 
    boxes[counter].classList.toggle("hidden");
    counter++;
    cartSmallPizzaLblC.innerHTML = "R " + smallTotal.toFixed(2);
    totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
});

 addBtn79c.addEventListener('click', function(){
    alert("Order added");
    mediumTotal += 79;
    totalCost += mediumTotal;
    if(counter > 1){
        counter = 0;} 
        boxes[counter].classList.toggle("hidden");
        counter++;
        cartMediumPizzaLblC.innerHTML = "R " + mediumTotal.toFixed(2);
        totalCostLbl.innerHTML = "Total Cost: R " + totalCost.toFixed(2);
});

addBtn99c.addEventListener('click', function(){
    alert("Order added");
    largeTotal += 99;
    totalCost += largeTotal;
});


