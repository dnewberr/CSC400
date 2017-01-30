var h1 = document.querySelector("h1");
var messageLabel = document.querySelector("#message");
var newColorsButton = document.querySelector("#new-colors");
var rgbLabel = document.querySelector("#rgb-label");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");

var colors = [];
var pickedColor;
var easyGame = false;

init();

function init() {
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if (this.textContent === "Easy") {
				reset(3);
				easyGame = true;
			} else {
				reset(6);
				easyGame = false;
			}
		})
	}

	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			if (this.style.background === pickedColor) {
				messageLabel.textContent = "Correct!";
				changeColor();
				newColorsButton.textContent = "Play Again?"
			} else {
				this.style.background = "#232323";
				messageLabel.textContent = "Try Again";
			}
		});
	}


	newColorsButton.addEventListener("click", function() {
	 	easyGame ? reset(3) : reset(6);
	});

	reset(6);
}

function reset(num) {
	colors = generateColors(num);
	pickedColor = getRandomColor(colors);
	rgbLabel.textContent = pickedColor;
	newColorsButton.textContent = "New Colors";
	messageLabel.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
}


function changeColor() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = pickedColor;
	}

	h1.style.background = pickedColor;
}

function getRandomColor(colors) {
	var num = getRandomNum(colors.length)
	rgbLabel.textContent = colors[num];
	h1.style.background = "steelblue";
	return colors[num];
}

function generateColors(max) {
	var colors = [];

	for (var i = 0; i < max; i++) {
		colors[i] = "rgb(" + getRandomNum(256)
			+ ", " + getRandomNum(256)
			+ ", " + getRandomNum(256) + ")";
	}

	return colors;
}

function getRandomNum(max) {
	return Math.floor(Math.random() * max);
}