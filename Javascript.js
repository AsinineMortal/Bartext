// FUNCTIONALITY ---------------------------------------
// Customers generate new orders over time DONE ***
// What to do when you try and serve a customer that has no order DONE ***
// You cannot go in negative Gold Balance DONE ***
// You cannot go in negative stock DONE ***
// You cannot go in negative drink stock DONE ***
// You earn money from customer sales DONE ***
// Figure out the Inventory vs. Stock thing DONE ***

// CONTENT ---------------------------------------------
// Build out recipe list/drink menu
// Add food/complex orders
// Day/night cycle
// Bar Upgrades
// Daily or Montly Rent

// SUSTAINABILITY / SCALE
// Write function to create button for each ingredient
// Write function to create button for each known drink
// Write function to create button for current customers

// AESTHETIC -------------------------------------------
// Update CSS styles
// Move Stats to Bar
	// Move Gold to top DONE ***
// Make the columns resize properly

// POLISH ----------------------------------------------
// Name Randomization
// Customers generate after a certain period of time

// FUNNY ADDITIONS -------------------------------------
// Kick out loitering customers
// People pay their tabs late so cash flow is a challenge

var goldBalance = 30;

var dayNight = "night";

var clockTime = "";
var currentDate = new Date();
currentDate.setHours(06);
currentDate.setMinutes(00);
formatDate(currentDate);

// Add leading zeroes to hours and minutes when needed
function formatDate(date) {
	var currentHours = currentDate.getHours();
	
	if (currentHours < 10) {
		currentHours = "0" + currentHours.toString();
	}
	
	var currentMinutes = currentDate.getMinutes();
	
	if (currentMinutes < 10) {
		currentMinutes = "0" + currentMinutes.toString();
	}
	
	clockTime = currentHours + ":" + currentMinutes;
}

var timeAdvanceInterval = setInterval(advanceTime, 1000, currentDate);

var hops = {name: "hops", stock: 0, value: 1.00};
var yeast = {name: "yeast", stock: 0, value: 1.50};
var honey = {name: "honey", stock: 0, value: 2.00};

var ale = {name: "ale", stock: 0, price: 5.00, ingredients: [yeast, hops]};
var mead = {name: "mead", stock: 0, price: 6.50, ingredients: [yeast, honey]};

var knownDrinks = [ale, mead];
var knownIngredients = [hops, yeast, honey];

var customer1 = {id: "customer1", name: "Ingrid", order: ale};
var customer2 = {id: "customer2", name: "Hans", order: mead};
var customer3 = {id: "customer3", name: "Jenxi", order: ale};
var customer4 = {id: "customer4", name: "Elias", order: mead};

// Save variables to browser session
/*localStorage.setItem('gold', JSON.stringify(goldBalance));
var gold = localStorage.getItem('gold');*/

// this runs the displayVars function when page is loaded
document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
	document.getElementById("clockBox").innerHTML = clockTime;
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
}	

document.getElementById("hops").onclick = function() {buyStock(hops)};
document.getElementById("yeast").onclick = function() {buyStock(yeast)};
document.getElementById("honey").onclick = function() {buyStock(honey)};

function buyStock(ingredient) {
	var errorMessage = "You do not have enough Gold to buy that ingredient.";

	if (goldBalance >= ingredient.value) {
			ingredient.stock++;
			goldBalance = goldBalance - ingredient.value;
			document.getElementById(ingredient.name + "Stock").innerHTML = ingredient.stock;
			document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);
	} else {
		document.getElementById("messageBox").innerHTML = errorMessage;
		setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 5000);
	}
}

	document.getElementById("ale").onclick = function() {craftDrink(ale)};
	document.getElementById("mead").onclick = function() {craftDrink(mead)};
	
function craftDrink(drink) {
	var drinkIngredients = drink.ingredients.length;
	var availableIngredients = 0;
	var errorMessage = "Sorry, you don't have enough ingredients.";
	
	for (var i = 0; i < drinkIngredients; i++) {
		if (drink.ingredients[i].stock > 0) {
			availableIngredients++;
		}
	}
	
	if (availableIngredients == drinkIngredients) {
		for (var i = 0; i < drinkIngredients; i++) {
			drink.ingredients[i].stock--;
			document.getElementById(drink.ingredients[i].name + "Stock").innerHTML = drink.ingredients[i].stock;
		}
		
		drink.stock++;
		document.getElementById(drink.name + "Stock").innerHTML = drink.stock;
	} else {
		document.getElementById("messageBox").innerHTML = errorMessage;
		setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 3000);
	}
}

document.getElementById("customer1Button").onclick = function() {serveCustomer(customer1)};
document.getElementById("customer2Button").onclick = function() {serveCustomer(customer2)};
document.getElementById("customer3Button").onclick = function() {serveCustomer(customer3)};
document.getElementById("customer4Button").onclick = function() {serveCustomer(customer4)};

function serveCustomer(customer) {
	// drink gets set when the function figures out which drink is being served
	var drink;
	
	if (customer.order.stock) {
		customer.order.stock--;
		document.getElementById(customer.order.name + "Stock").innerHTML = customer.order.stock;
		goldBalance += customer.order.price;
		
		customer.order = "Served";

		document.getElementById(customer.id + "Order").innerHTML = customer.order;
		document.getElementById("goldBalance").innerHTML = Number(goldBalance).toFixed(2);

		// triggers a new order after three seconds
	setTimeout(generateNewOrder, 3000, customer);
	} else {
			var errorMessage = "Sorry, you don't have any of those drinks crafted.";
			document.getElementById("messageBox").innerHTML = errorMessage;
			setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 3000);
			}
}

function generateNewOrder(customer) {
		var numberOfDrinksModifier = knownDrinks.length;
		var random = Math.floor(Math.random() * numberOfDrinksModifier);
		customer.order = knownDrinks[random];
		
		document.getElementById(customer.id + "Order").innerHTML = customer.order.name;
	}
	
	
function advanceTime(currentTime) {
	var newTime = new Date(currentTime.getTime() + 600000);
	document.getElementById("clockBox").innerHTML = newTime;
}