var metroRides;
var fare;
var cost;

function metroCalc(){
	userRides = document.getElementById("metroRides").value;
	fare = 2.75;
	cost = userRides * fare;
	
calcAlert();

}

function calcAlert(){

	if (cost > 115){
		alert("Buy yourself a monthly MetroCard!");
	}
		else{
			alert("Don't buy a monthly, pay as you go");
		}
	
}




/*var rent;
var income;
var percentage;
function rentCalc(){
	rent = document.getElementById("rent").value;
	income = document.getElementById("income").value;
	percentage = rent / income * 100;
	alert (percentage + 
		" percent of your $" + 
		income  + 
		" in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
}*/