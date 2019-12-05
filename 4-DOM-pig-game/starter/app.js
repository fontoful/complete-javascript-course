/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Define all the variables and later we'll assign them a value
let scores, roundScore, activePlayer, gamePlaying;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

//  Set the Dice to not appear at the beginning
document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

function nextPlayer() {
	// Next player
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	// Reset round score
	roundScore = 0;

	// Set values back to 0
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	// Toggle the active classes
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	// Hide dice again
	document.querySelector(".dice").style.display = "none";
}

// Event listeners
document.querySelector(".btn-roll").addEventListener("click", () => {
	if (gamePlaying) {
		// 1. Random number
		let dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		let diceDOM = document.querySelector(".dice");
		diceDOM.style.display = "block";
		diceDOM.src = `dice-${dice}.png`;

		// 3. Update the round score if the rolled number was NOT a 1
		if (dice !== 1) {
			// Add score
			roundScore += dice;
			document.querySelector(
				`#current-${activePlayer}`
			).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector(".btn-hold").addEventListener("click", () => {
	if (gamePlaying) {
		// add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector(`#score-${activePlayer}`).textContent =
			scores[activePlayer];

		// Check if player won the game
		if (scores[activePlayer] >= 20) {
			document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
			document.querySelector(".dice").style.display = "none";
			document
				.querySelector(`.player-${activePlayer}-panel`)
				.classList.add("winner");
			document
				.querySelector(`.player-${activePlayer}-panel`)
				.classList.remove("active");
			gamePlaying = false;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

document.querySelector(".btn-new").addEventListener("click", () => {
	// Reset all fields
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	// Resent the Variables (scores)
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;

	//  Set the Dice to not appear at the beginning
	document.querySelector(".dice").style.display = "none";

	// Remove winner Flag
	document.querySelector(`.player-0-panel`).classList.remove("winner");
	document.querySelector(`.player-1-panel`).classList.remove("winner");

	// Set active back to activePlayer One as it's always starting from 1 [0] index
	document.querySelector(`.player-0-panel`).classList.remove("active");
	document.querySelector(`.player-1-panel`).classList.remove("active");
	document.querySelector(`.player-0-panel`).classList.add("active");

	// Reset player names
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContent = "Player 2";

	// After clicking the new game button, set gamePlaying back to true to continue playin
	gamePlaying = true;
});
