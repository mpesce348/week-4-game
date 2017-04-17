
//global variables
var gameOn = false;
var chooseDefender = false;
var playerDeath = false;
var deadHeros=[];
var attacker;
var foe;
var winner;


//hero objects
var ironMan = {
	hp: 100,
	attackPower: 10,
}
var spiderMan = {
	hp:120,
	attackPower: 7,
}
var captainAmerica = {
	hp: 140,
	attackPower: 9,
}
var scarletWitch ={
	hp: 160,
	attackPower: 12,
}
//manages click events
//only works during char selection and on game reset
$("#players").on("click", function () {
	if (!(gameOn) && !(chooseDefender)) { //check start game conditions
		chooseDefender=true;// flags that user needs to choose opponent next
		$("#players").html("Enemy");
		attacker.appendTo(".hero");//adds player to battle
		console.log(attacker);
		$(".battleWorld").fadeIn("slow");
	} else if (chooseDefender) {
		chooseDefender=false;
		gameOn=true;
		$("#alerts").html("");
		foe.appendTo(".opponent");
		console.log(foe);
		}
})

function battle() {
	var attack = parseInt(attacker.data("attack-power"));//get player attack power
	var ohp=parseInt(foe.data("hp")); //get foe hit points
	ohp-=attack; //decrease for hit points
	foe.data("hp", ohp); //change data on foe hp
}