var express = require('express');
var router = express.Router();

require('../models/connection');
const Game = require('../models/games');

const words = ['HOUSE', 'LAPTOP', 'SUN', 'FLOWER', 'TELEVISION', 'DEVELOPER', 'BOOTCAMP'];

router.get('/new', (req, res) => {
	const word = words[Math.floor(Math.random() * words.length)].toUpperCase();

	const newGame = new Game({
		word: word,
		createdAt: new Date(),
	});

	newGame.save(() => {
		const gameId = newGame._id;

		res.json({ result: true, gameId, wordLength: word.length, word: word });
	});
});

module.exports = router;

