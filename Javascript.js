// FUNCTIONALITY ---------------------------------------
// Customers generate new orders over time DONE ***
// What to do when you try and serve a customer that has no order
// You cannot go in negative Gold Balance
// You cannot go in negative stock
// You earn money from customer sales DONE ***

// AESTHETIC -------------------------------------------
// Update CSS styles
// Move Stats to Bar
	// Move Gold to top
// Make the columns resize properly

// POLISH ----------------------------------------------
// Name Randomization

var goldBalance = 30;

var hops = {name: "hops", stock: 0, value: 1.00};
var yeast = {name: "yeast", stock: 0, value: 1.50};
var honey = {name: "honey", stock: 0, value: 2.00};

var ale = {name: "ale", stock: 0, price: 5.00, ingredients: [yeast, hops]};
var mead = {name: "mead", stock: 0, price: 6.00, ingredients: [yeast, honey]};

var drinkList = [ale, mead];
var inventory = [ale, mead];

var customer1 = {id: "customer1", name: "Ingrid", order: ale};
var customer2 = {id: "customer2", name: "Hans", order: mead};
var customer3 = {id: "customer3", name: "Jenxi", order: ale};
var customer4 = {id: "customer4", name: "Elias", order: mead};

// this runs the displayVars function when page is loaded
document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
    document.getElementById("customer1Name").innerHTML = customer1.name;
    document.getElementById("customer2Name").innerHTML = customer2.name;
    document.getElementById("customer3Name").innerHTML = customer3.name;
    document.getElementById("customer4Name").innerHTML = customer4.name;
	document.getElementById("customer1Order").innerHTML = customer1.order.name;
    document.getElementById("customer2Order").innerHTML = customer2.order.name;
    document.getElementById("customer3Order").innerHTML = customer3.order.name;
    document.getElementById("customer4Order").innerHTML = customer4.order.name;
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
			inventoryText += value.name;
			
			if (inventory.rightHand != "" ) {
			inventoryText += " ";
			}
		}
	} document.getElementById("inventory").innerHTML = inventoryText;
}	

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
	var errorMessage = "Sorry, you are out of stock.";
	var successfulCraft = false;
	for (var i = 0; i < drink.ingredients.length; i++) {
		if (drink.ingredients[i].stock > 0) {
			drink.ingredients[i].stock--;
			successfulCraft = true;
		} else {
			document.getElementById("messageBox").innerHTML = errorMessage;
			setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 3000);
			}
	}

	if (successfulCraft) {
		drink.stock++;
	} 
	
	document.getElementById(drink.name + "Stock").innerHTML = drink.stock;
	document.getElementById(drink.ingredients[0].name + "Stock").innerHTML = drink.ingredients[0].stock;
	document.getElementById(drink.ingredients[1].name + "Stock").innerHTML = drink.ingredients[1].stock;
}

document.getElementById("customer1Button").onclick = function() {serveCustomer(inventory, customer1)};
document.getElementById("customer2Button").onclick = function() {serveCustomer(inventory, customer2)};
document.getElementById("customer3Button").onclick = function() {serveCustomer(inventory, customer3)};
document.getElementById("customer4Button").onclick = function() {serveCustomer(inventory, customer4)};

function serveCustomer(inventory, customer) {
	// drink gets set when the function figures out which drink is being served
	var drink;
	
	// if the first drink in the inventory is the customers order, proceed
	if (inventory[0] == customer.order) {
		inventory[0].stock--;
		customer.order = "Served";
		drink = inventory[0];
		goldBalance += drink.price;
		
		// if not, try the second drink in the inventory
	} else if (inventory[1] == customer.order) {
		inventory[1].stock--;
		customer.order = "Served";
		drink = inventory[1];
		goldBalance += drink.price;
	}
	document.getElementById(drink.name + "Stock").innerHTML = drink.stock;
	document.getElementById(customer.id + "Order").innerHTML = customer.order;
	document.getElementById("goldBalance").innerHTML = goldBalance;
	
	// triggers a new order after three seconds
	setTimeout(generateNewOrder, 3000, customer);
}

function generateNewOrder(customer) {
		var random = Math.floor(Math.random() *2);
		customer.order = drinkList[random];
		
		document.getElementById(customer.id + "Order").innerHTML = customer.order.name;
	}
	
	