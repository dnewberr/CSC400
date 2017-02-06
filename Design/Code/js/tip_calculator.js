
// Hide tip on load
var tipAmountLabel = document.getElementById("total-tip");
tipAmountLabel.style.display = "none";

var eachLabel = document.getElementById("each");
eachLabel.style.display = "none";

// Calculate button callback
var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
	calculateTip();
});


function calculateTip() {
	//Store input data
	var amount = document.getElementById("amount").value;
	var quality = document.getElementById("quality").value;
	var numPeople = document.getElementById("numPeople").value;

	//Validate
	if (amount === "" || quality === "0") {
		return alert("Enter some vals.");
	}

	//Check to see if >1 person
	if (numPeople === "") {
		numPeople = 1;
		eachLabel.style.display = "none";
	} else if (numPeople > 1) {
		eachLabel.style.display = "block";
	}

	//Calculate
	var total = Math.round(100 * amount * quality / numPeople) / 100;
	total = total.toFixed(2);

	tipAmountLabel.style.display = "block";
    document.getElementById("tip").innerHTML = total;
}