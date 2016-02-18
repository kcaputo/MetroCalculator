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
