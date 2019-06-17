var inventory = [];

var goldBalance = 30;

var hopsStock = 0;
var yeastStock = 0;
var honeyStock = 0;

var hopsValue = 1.00;
var yeastValue = 1.50;
var honeyValue = 2.00;

var alePrice = 5.00;
var meadPrice = 6.00;

var customer1order = "Ale";
var customer2order = "Mead";
var customer3order = "None";
var customer4order = "None";

document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
    document.getElementById("customer1order").innerHTML = customer1order;
    document.getElementById("customer2order").innerHTML = customer2order;
    document.getElementById("customer3order").innerHTML = customer3order;
    document.getElementById("customer4order").innerHTML = customer4order;
}