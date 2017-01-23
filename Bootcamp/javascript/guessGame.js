var numGuessed = Number(prompt("Guess a number!"));
var actualNum = 7;

if (numGuessed === actualNum) {
	alert("You guessed it!");
} else if (numGuessed > actualNum) {
	alert("Too high. Try again.");
} else {
	alert("Too low. Try again.");
}