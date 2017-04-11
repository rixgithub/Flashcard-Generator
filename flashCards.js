fs = require("fs");

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

BasicCard.prototype.printCard = function() {
	console.log("**************");
	console.log("FRONT  Question: " + this.front);
	console.log("BACK   Answer: " + this.back);
	console.log("**************");
}

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	this.printFull = function() {
		console.log(this.text);
	}

	this.printCloze = function() {
		console.log(this.cloze);
	}

	this.printPartial = function() {

		var partial = this.text.replace(cloze, "...");

		if (text.includes(cloze)) {
			console.log(partial);
			fs.appendFile('clozeCard.txt', partial + ", ", function(err) {
					if (err) {
						return console.log(err);
					}
					console.log("Your clozeCard.txt updated");
			});
		} else {
			console.log("The cloze deletion does not appear in the full text.  Please make a new card.");
		}
	}
}

var question1 = new BasicCard("What is the boiling point of water?", "212°F or 99.98°C");
var question2 = new BasicCard("How many miles from Earth is the Sun?", "92.96 million miles");
var question3 = new ClozeCard("The Sun is mainly composed of hydrogen gas.", "hydrogen");
var question4 = new ClozeCard("Mercury is the closest planet to our sun.", "Mercury");

var brokenCloze = new ClozeCard("This doesn't work", "oops");
var anotherBrokeCard = new ClozeCard("Jupiter is the largest planet in our solar system.", "Saturn");

question1.printCard();
question2.printCard();
console.log("*********************");
question3.printFull();
question3.printCloze();
question3.printPartial();
console.log("*********************");
question4.printFull();
question4.printCloze();
question4.printPartial();
console.log("*********************");
brokenCloze.printPartial();
console.log("*********************");
anotherBrokeCard.printPartial();
console.log();