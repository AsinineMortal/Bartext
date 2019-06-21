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

var hops = {name: "hops", stock: 0, value: 1.00};
var yeast = {name: "yeast", stock: 0, value: 1.50};
var honey = {name: "honey", stock: 0, value: 2.00};

var ale = {name: "ale", stock: 0, price: 5.00, ingredients: [yeast, hops]};
var mead = {name: "mead", stock: 0, price: 6.50, ingredients: [yeast, honey]};

var knownDrinks = [ale, mead];
var knownIngredients = [hops, yeast, honey];

var customerNameList = {
	first: [
		Alleta, Amund, Arvid, Bjorn, Bo, Canute, Carolus, Carson, Dag, Dagna, Dahlia, Davin, Delling, Denholm, Dyre, Egil, Eir, Elvis, Eric, Erica, Evonne, Filip, Fortinbras, Frey, Freya, Girls, Gudrun, Gunda, Haakon, Halle, Hannes, Idonea, Igor, Ingmar, Ingrid, Ingvar, Jarl, Jesen, Kaj, Karena, Karr, Kelda, Kelsey, Kelsey, Kerr, Kettil, Kiersten, Knute, Kolby, Krystyn, Lang, Lars, Larsen, Linnea, Lis, Lisolette, Litzy, Loki, Ludvig, Lundy, Lunt, Malin, Marny, Mats, Mia, Nels, Niels, Nissa, Norb, Odell, Odo, Olan, Pal, Quenby, Quinby, Quinby, Rad, Ran, Ranveig, Rinda, Runa, Rune, Sanna, Savea, Selma, Signa, Signild, Sigrun, Skjøld, Snorre, Snøfrid, Sonja, Sorley, Steinar, Stieran, Svea, Sven, Synnove, Sølve, Thiassi, Thoralf, Thorborg, Thorin, Thorstein, Thurid, Thyrrni, Toril, Toste, Toyah, Tryggvi, Tyra, Ula, Ulffr, Ulick, Ull, Ulrik, Ulster, Ultar, Unn, Vali, Valkyrie, Vanja, Vannevar, Vanslow, Vidar, Vidkun, Vigdis, Viggo, Viljalmr, Viljo, Viola, Von, Waage, Wray, Ylwa, Zainab, Zvi
		],
	last: [
		Aaberg, Aland, Alf, Alfson, Ander, Askelson, Aven, Axel, Backe, Bakken, Becher, Beck, Bell, Bengtsson, Benson, Berg, Bergh, Bernt, Bi, Bielke, Bjerk, Bjerke, Blom, Bonde, Borg, Borgerson, Borgeson, Brand, Bro, Bugge, Bugge, Bunderson, Carlson, Christeson, Dal, Daman, Dolph, Edman, Elison, Ellingboe, Emanuelson, Ericson, Erling, Eskelson, Eskildsen, Estenson, Fagerberg, Falk, Falkenberg, Forberg, Fredrikson, Friberg, Friis, Frydenlund, Gangestad, Gulbrandsen, Gulbrandson, Gulbranson, Gustason, Gustavson, Guttormson, Haldorson, Halpain, Halvorson, Haralson, Hartvigsen, Hatlen, Haugrud, Haugstad, Helgason, Helvig, Heskin, Hexum, Hillesland, Hjelmstad, Hjorth, Hohlt, Holmen, Jostad, Junge, Kaase, Karsten, Klingenberg, Knudtson, Kolbeck, Kolsrud, Krog, Krogh, Krum, Kvalheim, Leif, Lind, Lorenson, Lund, Mathieson, Mathison, Matsen, Ness, Nord, Nyberg, Nybo, Nyborg, Nygaard, Nygard, Nyhus, Nyland, Nylund, Ohlson, Olafson, Oscar, Peerson, Pihl, Riis, Ring, Risberg, Salverson, Sandberg, Sandoe, Sigmond, Skau, Soelberg, Steenberg, Steensen, Stinar, Thomason, Thor, Thorp, Thostenson, Toft, Tofte, Torgrimson, Torp, Tostenson, Tranum, Truelson, Trulson, Trygg, Vagle, Vang, Westberg, Westergaard, Westergard
		]
	};

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
	var errorMessage = "Sorry, you don't have enough ingredients.";
	var successfulCraft = 0;
	var ingredientsToReduceStock = [];
	// for each ingredient in the drink, check that the ingredient is in stock
	// if it's in stock, increase successfulCraft and add ingredient 
	for (var i = 0; i < drink.ingredients.length; i++) {
		if (drink.ingredients[i].stock > 0) {
			successfulCraft++;
			ingredientsToReduceStock.push(drink.ingredients[i]);
		} else {
			document.getElementById("messageBox").innerHTML = errorMessage;
			setTimeout(function(){document.getElementById("messageBox").innerHTML = "";}, 5000);
			}
	}

	if (successfulCraft == drink.ingredients.length) {
		drink.stock++;
		for (var i = 0; i < drink.ingredients.length; i++) {
			drink.ingredients[i].stock--;
			console.log(drink.ingredients[i].stock);
		}
	} 
	
	document.getElementById(drink.name + "Stock").innerHTML = drink.stock;
	document.getElementById(drink.ingredients[0].name + "Stock").innerHTML = drink.ingredients[0].stock;
	document.getElementById(drink.ingredients[1].name + "Stock").innerHTML = drink.ingredients[1].stock;
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