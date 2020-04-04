var landingGoldBalance = goldBalance;
var landingPropertyTax = propertyTaxAmount;
var landingPropertyTaxGracePeriod = propertyTaxGracePeriod;

document.body.onload = function() {displayVarsToHTML()};

function displayVarsToHTML() {
	
	document.getElementById("landingGoldBalance").innerHTML = landingGoldBalance;
	document.getElementById("landingPropertyTax").innerHTML = landingPropertyTax;
	document.getElementById("landingPropertyTaxGracePeriod").innerHTML = landingPropertyTaxGracePeriod;
}	