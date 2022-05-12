let guessNumber = 1;
let gameId = null;

// New game
document.querySelector('#newGame').addEventListener('click', function () {
	fetch('http://localhost:3000/game/new')
		.then(response => response.json())
		.then(data => {
			if (!data.result) return;

			// Replace game ID
			gameId = data.gameId;
			document.querySelector('#gameId').textContent = data.gameId;

			// Reset word to guess
			document.querySelector('#wordToGuess').innerHTML = '';
			for (let i = 0; i < data.wordLength; i++) {
				document.querySelector('#wordToGuess').innerHTML += `<p>?</p>`;
			}

			// Reset guess inputs, result message and focus
			document.querySelector('#guess1').disabled = false;
			document.querySelector('#guess1').value = '';
			for (let i = 2; i <= 6; i++) {
				document.querySelector(`#guess${i}`).disabled = true;
				document.querySelector(`#guess${i}`).value = '';
			}
			document.querySelector('#result').innerHTML = '';
			document.querySelector('#guess1').focus();

			// Reset guess number
			guessNumber = 1;
		})
});

// Guess
document.addEventListener('keypress', function (event) {
	if (event.key !== 'Enter') return;

	const guess = document.querySelector(`#guess${guessNumber}`).value.toUpperCase();

	fetch(`http://localhost:3000/game/guess/${gameId}/${guess}`)
		.then(response => response.json())
		.then(data => {
			if (!data.result) return;

			// Update word to guess
			document.querySelector('#wordToGuess').innerHTML = '';
			for (let i = 0; i < data.guessResult.length; i++) {
				if (data.guessResult[i]) {
					document.querySelector('#wordToGuess').innerHTML += `<p class="correctLetter">${data.guessResult[i]}</p>`;
				} else {
					document.querySelector('#wordToGuess').innerHTML += `<p>?</p>`;
				}
			}

			// Check correct guess or game over
			if (!data.guessResult.includes(null)) {
				document.querySelector('#result').innerHTML = `<p class="won">YOU WON! 🤩</p>`;
				document.querySelector(`#guess${guessNumber}`).value = guess;
				for (let i = guessNumber; i <= 6; i++) {
					document.querySelector(`#guess${i}`).disabled = true;
				}
				return;
			} else if (guessNumber === 6) {
				document.querySelector('#guess6').disabled = true;
				document.querySelector('#guess6').value = guess;
				fetch(`http://localhost:3000/game/solution/${gameId}`)
					.then(response => response.json())
					.then(solution => {
						document.querySelector('#result').innerHTML = `
							<p class="loose">YOU LOOSE 😢</p>
							<p class="solution">The solution was: ${solution.word}</p>
						`;
					});
				return;
			}

			// Update guess inputs and focus
			document.querySelector(`#guess${guessNumber}`).disabled = true;
			document.querySelector(`#guess${guessNumber}`).value = guess;
			document.querySelector(`#guess${guessNumber + 1}`).disabled = false;
			document.querySelector(`#guess${guessNumber + 1}`).focus();

			// Update guess number
			guessNumber++;
		})
});
