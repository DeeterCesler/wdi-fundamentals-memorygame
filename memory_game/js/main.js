console.log("Up and running!");


var myArray = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = myArray[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = myArray[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else alert("Sorry, try again.");
}