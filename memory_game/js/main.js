console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	/*I decided to use my own code here since I had already written 
	a check for match function within flipCard. So I just moved it here*/
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else alert("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);

//