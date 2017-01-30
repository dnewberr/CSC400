var numGamesButton = document.querySelector("#number-of-plays");
var p1ScoreButton = document.querySelector("#player-1-score");
var p2ScoreButton = document.querySelector("#player-2-score");
var resetButton = document.querySelector("#reset-game");

var numGamesLabel = document.querySelector("#numGames");
var p1ScoreLabel = document.querySelector("#p1Score");
var p2ScoreLabel = document.querySelector("#p2Score");

var maxGames = 5;
var p1Score = 0;
var p2Score = 0;

var gameOver = false;

p1ScoreButton.addEventListener("click", function() {
	p1Score = updateScore(p1Score, p1ScoreLabel);
});

p2ScoreButton.addEventListener("click", function() {
	p2Score = updateScore(p2Score, p2ScoreLabel);
});

resetButton.addEventListener("click", function() {
	maxGames = 5;
	resetGame();
});

numGamesButton.addEventListener("change", function() {
	maxGames = Number(this.value);
	numGamesLabel.textContent = maxGames;

	resetGame();
});

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	gameOver = false;

	numGamesLabel.textContent = maxGames;
	p1ScoreLabel.textContent = p1Score;
	p1ScoreLabel.classList.remove("winner")
	p2ScoreLabel.textContent = p2Score;
	p2ScoreLabel.classList.remove("winner")
}

function updateScore(score, label) {
	if (!gameOver) {
		score++;

		gameOver = score === maxGames;

		if (gameOver) {
			label.classList.add("winner");
		}

		label.textContent = score;
	}

	return score;
}