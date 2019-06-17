var inventory = ["Ale", "Mead"];

var goldBalance = 30;

var hopsStock = 0;
var yeastStock = 0;
var honeyStock = 0;

var aleStock = 0;
var meadStock = 0;

var hopsValue = 1.00;
var yeastValue = 1.50;
var honeyValue = 2.00;

var alePrice = 5.00;
var meadPrice = 6.00;

var customer1order = "Ale";
var customer2order = "Mead";
var customer3order = "None";
var customer4order = "None";

// this runs the displayVars function when page is loaded
document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
    document.getElementById("customer1order").innerHTML = customer1order;
    document.getElementById("customer2order").innerHTML = customer2order;
    document.getElementById("customer3order").innerHTML = customer3order;
    document.getElementById("customer4order").innerHTML = customer4order;
 	document.getElementById("hopsValue").innerHTML = Number(hopsValue).toFixed(2);
 	document.getElementById("yeastValue").innerHTML = Number(yeastValue).toFixed(2);
 	document.getElementById("honeyValue").innerHTML = Number(honeyValue).toFixed(2); 
 	document.getElementById("aleStock").innerHTML = aleStock;
 	document.getElementById("meadStock").innerHTML = meadStock;
	document.getElementById("hopsStock").innerHTML = hopsStock;
    document.getElementById("yeastStock").innerHTML = yeastStock;
    document.getElementById("honeyStock").innerHTML = honeyStock;
    document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);
    document.getElementById("inventory").innerHTML = inventory.toString();
}	

// List of Functions To Make
// buy stock
// put drink in inventory
// serve drink to customer
