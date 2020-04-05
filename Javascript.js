var goldBalance = 500;
var propertyTax = "Unpaid";
var propertyTaxAmount = 1500;
var propertyTaxGracePeriod = 2;
var firstPropertyTaxMessage = true;
var firstMonthEver = true;

var gameTime = new Date(1, 1, 1);
	gameTime.setHours(6);
	gameTime.setMinutes(30);

var h = gameTime.getHours();
var m = gameTime.getMinutes();

var clockTime = h + ":" + m;

var gameDay = gameTime.getDate();
var gameMonth = gameTime.getMonth();
var gameYear = gameTime.getYear();
var gameDayofWeek = gameTime.getDay();
var gameDayofWeekName = "Example";

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

if(document.title == "Bartender") {
	document.body.onload = function() {displayVarsToHTML(), advanceTime()};

	function displayVarsToHTML() {
		
		document.getElementById("clockBox").innerHTML = clockTime;
		document.getElementById("dayOfWeekBox").innerHTML = gameDayofWeekName;
		document.getElementById("dayBox").innerHTML = gameDay;
		document.getElementById("monthBox").innerHTML = gameMonth;
		document.getElementById("yearBox").innerHTML = gameYear;
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

	function advanceTime() {
		gameTime.setMinutes(gameTime.getMinutes() + 15);
		
		h = fixTime(gameTime.getHours());
		m = fixTime(gameTime.getMinutes());
		
		gameMonth = gameTime.getMonth();
		gameYear = gameTime.getYear();
		gameDay = gameTime.getDate();
		gameDayOfWeek = gameTime.getDay();
		gameDayOfWeekName = dayName(gameDayOfWeek);
		
		checkForEvent(gameDay);
		checkBusinessHours(gameTime.getHours());
		
			document.getElementById("clockBox").innerHTML = h + ":" + m;
			document.getElementById("dayBox").innerHTML = gameDay;
			document.getElementById("monthBox").innerHTML = gameMonth;
			document.getElementById("yearBox").innerHTML = gameYear;
			document.getElementById("dayOfWeekBox").innerHTML = gameDayOfWeekName;
		setTimeout(advanceTime, 1000);
	} 

	function checkForEvent(currentDay) {
		switch(currentDay) {
			case 1: if(firstMonthEver == false) propertyTaxDue();
				break;
			
			case 3:
				if(propertyTax != "Paid") endGame("propertyTaxUnpaid");
				firstMonthEver = false;
				break;
				
			case 29: propertyTax = "Unpaid"; firstPropertyTaxMessage = true;
				break;
				
			default: null;
		}
	}

	function checkBusinessHours(gameHour) {
		switch(gameHour) {
			case 2:
				document.getElementById("frontOfBarArea").style.display = "none";
				document.getElementById("messageBox").innerHTML = "Bar Closed";
				setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 5000);
				break;
				
			case 11:
				document.getElementById("frontOfBarArea").style.display = "inline";
				document.getElementById("messageBox").innerHTML = "Bar Open";
				setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 5000);
				break;
				
			default: null;
		}
	}
	
	function propertyTaxDue() {
		if(firstPropertyTaxMessage == true) {
			var message = "Property tax due by the 3rd or the bank will seize your bar.";
			document.getElementById("propertyTaxButton").style.display = "inline";
			document.getElementById("propertyTaxButton").innerHTML = "Pay Property Tax ($" + propertyTaxAmount + ")";
			
			document.getElementById("messageBox").innerHTML = message;
			setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 5000);
			firstPropertyTaxMessage = false;
		}
	}

	document.getElementById("propertyTaxButton").onclick = function() {payPropertyTax()};

	function payPropertyTax() {
		if(goldBalance >= propertyTaxAmount && propertyTax == "Unpaid") {
			propertyTax = "Paid";
			goldBalance -= propertyTaxAmount;
			document.getElementById("goldBalance").innerHTML = goldBalance;
			document.getElementById("propertyTaxButton").style.display = "none";
			} else {
				var errorMessage = "Sorry, you don't have enough to pay the tax.";
				document.getElementById("messageBox").innerHTML = errorMessage;
			}
		
	}
	
	function endGame(endCause) {
		switch(endCause) {
			case "propertyTaxUnpaid": {
				var errorMessage = "You failed to pay your property tax on time and the bank seized your bar. Time to start over."
				document.getElementById("gameContentArea").innerHTML = "";
				document.getElementById("messageBox").innerHTML = errorMessage;
				document.getElementById("propertyTaxButton").style.display = "none";
			}
		}
		
	}

	function fixTime(timeInt) {
		if (timeInt < 10) {
			return "0" + timeInt;
		} else return timeInt;
	}

	function dayName(dayInt) {
		switch(dayInt) {
			case 0: return "Sunday";
				break;
				
			case 1: return "Monday";
				break;
				
			case 2: return "Tuesday";
				break;
				
			case 3: return "Wednesday";
				break;
				
			case 4: return "Thursday";
				break;
				
			case 5: return "Friday";
				break;
				
			case 6: return "Saturday";
				break;
		}
	}

	document.getElementById("hops").onclick = function() {buyStock(hops)};
	document.getElementById("yeast").onclick = function() {buyStock(yeast)};
	document.getElementById("honey").onclick = function() {buyStock(honey)};
	document.getElementById("5xHops").onclick = function() {buyStock5(hops)};
	document.getElementById("5xYeast").onclick = function() {buyStock5(yeast)};
	document.getElementById("5xHoney").onclick = function() {buyStock5(honey)};

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

	function buyStock5(ingredient) {
		var errorMessage = "You do not have enough Gold to buy that ingredient.";
		var ingredientValue5 = ingredient.value * 5;
		
		if (goldBalance >= (ingredientValue5)) {
				ingredient.stock += 5;
				goldBalance = goldBalance - ingredientValue5;
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
		
}