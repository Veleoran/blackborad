var express = require('express');
var router = express.Router();

require('../models/connection');
const Game = require('../models/games');

const words = ['HOUSE', 'LAPTOP', 'TELEVISION'];

router.get('/new', (req, res) => {
	const word = words[Math.floor(Math.random() * words.length)].toUpperCase();

	const newGame = new Game({
		word: word,
		createdAt: new Date(),
	});

	newGame.save(() => {
		const gameId = newGame._id;

		res.json({ result: true, gameId, wordLength: word.length });
	});
});

router.get('/guess/:gameId/:word', (req, res) => {
	const gameId = req.params.gameId;
	const guess = req.params.word.toUpperCase();

	Game.findById(gameId).then(data => {
		if (!data) {
			res.json({ result: false, message: 'Game not found' });
			return;
		} else if (guess.length !== data.word.length) {
			res.json({ result: false, message: 'Invalid guess' });
			return;
		}

		const guessResult = [];
		for (let i = 0; i < guess.length; i++) {
			guessResult.push(guess[i] === data.word[i] ? data.word[i] : null);
		}

		res.json({ result: true, guessResult });
	});
});

router.get('/solution/:gameId', (req, res) => {
	const gameId = req.params.gameId;

	Game.findById(gameId).then(data => {
		if (!data) {
			res.json({ result: false, message: 'Game not found' });
			return;
		}

		res.json({ result: true, word: data.word });
	});
});

module.exports = router;
