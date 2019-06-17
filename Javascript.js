var inventory = ["Ale", "Mead"];

var goldBalance = 30;

var hops = {name: "hops", stock: 0, value: 1.00};
var yeast = {name: "yeast", stock: 0, value: 1.50};
var honey = {name: "honey", stock: 0, value: 2.00};

var ale = {stock: 0, price: 5.00};
var mead = {stock: 0, price: 6.00};

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
 	document.getElementById("hopsValue").innerHTML = Number(hops.value).toFixed(2);
 	document.getElementById("yeastValue").innerHTML = Number(yeast.value).toFixed(2);
 	document.getElementById("honeyValue").innerHTML = Number(honey.value).toFixed(2); 
 	document.getElementById("aleStock").innerHTML = ale.stock;
 	document.getElementById("meadStock").innerHTML = mead.stock;
	document.getElementById("hopsStock").innerHTML = hops.stock;
    document.getElementById("yeastStock").innerHTML = yeast.stock;
    document.getElementById("honeyStock").innerHTML = honey.stock;
    document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);
    document.getElementById("inventory").innerHTML = inventory.toString();
}	

// List of Functions To Make
// buy stock
// put drink in inventory
// serve drink to customer

document.getElementById("hops").onclick = function() {buyStock(hops)};
document.getElementById("yeast").onclick = function() {buyStock(yeast)};
document.getElementById("honey").onclick = function() {buyStock(honey)};

function buyStock(ingredient) {
	ingredient.stock++;
	goldBalance = goldBalance - ingredient.value;
	document.getElementById(ingredient.name + "Stock").innerHTML = ingredient.stock;
	document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);
}