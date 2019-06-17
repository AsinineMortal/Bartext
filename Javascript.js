var inventory = ["Ale", "Mead"];

var goldBalance = 30;

var hops = {name: "hops", stock: 0, value: 1.00};
var yeast = {name: "yeast", stock: 0, value: 1.50};
var honey = {name: "honey", stock: 0, value: 2.00};

var ale = {name: "ale", stock: 0, price: 5.00, ingredients: [yeast, hops]};
var mead = {name: "mead", stock: 0, price: 6.00, ingredients: [yeast, honey]};

var customer1 = {name: "Ingrid", order: "Ale"};
var customer2 = {name: "Hans", order: "Mead"};
var customer3 = {name: "Jenxi", order: "None"};
var customer4 = {name: "Elias", order: "None"};

// this runs the displayVars function when page is loaded
document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
    document.getElementById("customer1Name").innerHTML = customer1.name;
    document.getElementById("customer2Name").innerHTML = customer2.name;
    document.getElementById("customer3Name").innerHTML = customer3.name;
    document.getElementById("customer4Name").innerHTML = customer4.name;
	document.getElementById("customer1Order").innerHTML = customer1.order;
    document.getElementById("customer2Order").innerHTML = customer2.order;
    document.getElementById("customer3Order").innerHTML = customer3.order;
    document.getElementById("customer4Order").innerHTML = customer4.order;
 	document.getElementById("hopsValue").innerHTML = Number(hops.value).toFixed(2);
 	document.getElementById("yeastValue").innerHTML = Number(yeast.value).toFixed(2);
 	document.getElementById("honeyValue").innerHTML = Number(honey.value).toFixed(2); 
 	document.getElementById("aleStock").innerHTML = ale.stock;
 	document.getElementById("meadStock").innerHTML = mead.stock;
	document.getElementById("hopsStock").innerHTML = hops.stock;
    document.getElementById("yeastStock").innerHTML = yeast.stock;
    document.getElementById("honeyStock").innerHTML = honey.stock;
    document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);
    
	var inventoryItems = Object.values(inventory);
	var inventoryText = "";
	var inventorySize = Object.keys(inventory).length;
	
	for (var value of inventoryItems) {
		if (value != "inventory") {
			inventoryText += value;
			
			if (inventory.rightHand != "" ) {
			inventoryText += " ";
			}
		}
		
	}
		
	document.getElementById("inventory").innerHTML = inventoryText;
	
	
	
}	

// List of Functions To Make
// buy stock DONE ***
// put drink in inventory DONE ***
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

	document.getElementById("ale").onclick = function() {craftDrink(ale)};
	document.getElementById("mead").onclick = function() {craftDrink(mead)};

function craftDrink(drink) {
	drink.stock++;
	drink.ingredients[0].stock--;
	drink.ingredients[1].stock--;
	document.getElementById(drink.name + "Stock").innerHTML = drink.stock;
	document.getElementById(drink.ingredients[0].name + "Stock").innerHTML = drink.ingredients[0].stock;
	document.getElementById(drink.ingredients[1].name + "Stock").innerHTML = drink.ingredients[1].stock;
}

function serveCustomer(drink, customer) {
	if (drink == customer.order) {
		drink.stock--;
		customer.order = null;
	}
	
}