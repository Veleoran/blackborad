require('./models/connection');
const Play = require('./models/plays');

function getFirstCardToPlay(cards, lastPlay) {
	let cardsToPlay = [];

	for (let i = 0; i < cards.length; i++) {
			if (cards[i].color === lastPlay.color || cards[i].number === lastPlay.number) {
					cardsToPlay.push(cards[i]);
			}
	}

	lastPlay = cardsToPlay[0];
	const index = cards.indexOf(lastPlay);
	if (index != null) {
			cards.splice(index, 1);
	}

	return lastPlay;
}

function playUno(cards, lastPlay) {
	// TODO Julie

	const newPlay = new Play({
		color: 'green',
		number: 2,
	});
	newPlay.save();

	const newPlay2 = new Play({
		color: 'green',
		number: 3,
	});
	newPlay2.save();
}

module.exports = playUno; // Do not edit/remove this line
