var fighters=[];

//hero objects
var ironMan = {
	hp: 100,
	attackPower: 10,
	counter: 20,
}
var spiderMan = {
	hp:120,
	attackPower: 7,
	counter: 30,
}
var captainAmerica = {
	hp: 140,
	attackPower: 9,
	counter: 25,
}
var scarletWitch ={
	hp: 160,
	attackPower: 12,
	counter: 35,
}
//on click choose character

$('.one').on('click', function() {
    $('.hero').append($('.one'));
    $('.enemies').append($('.two'));
    $('.enemies').append($('.three'));
    $('.enemies').append($('.four'));
    $("#playerChoice").remove();
    $(fighters).append(".one");

    console.log("Got a click on Iron Man");
    console.log(fighters);

});    

$('.two').on('click', function() {
    $('.hero').append($('.two'));
    $('.enemies').append($('.one'));
    $('.enemies').append($('.three'));
    $('.enemies').append($('.four'));
    $("#playerChoice").remove();

    console.log("Got a click on Spider-Man");

});    

$('.three').on('click', function() {
    $('.hero').append($('.three'));
    $('.enemies').append($('.one'));
    $('.enemies').append($('.two'));
    $('.enemies').append($('.four'));
    $("#playerChoice").remove();
    console.log("Got a click on Captain America");

});    

$('.four').on('click', function() {
    $('.hero').append($('.four'));
    $('.enemies').append($('.one'));
    $('.enemies').append($('.two'));
    $('.enemies').append($('.three'));
    $("#playerChoice").remove();

    console.log("Got a click on Scarlet Witch");

});