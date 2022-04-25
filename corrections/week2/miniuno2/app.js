require('./models/connection');
const Play = require('./models/plays');

let cards = [
	{
		'color': 'green',
		'number': 6,
	},
	{
		'color': 'red',
		'number': 6,
	},
	{
		'color': 'red',
		'number': 9,
	},
	{
		'color': 'green',
		'number': 9,
	}, {
		'color': 'yellow',
		'number': 9,
	}
]

let lastPlay = {
	'color': 'blue',
	'number': 6,
}

function playUno(myCards, lastCard) {

	const gameLength = myCards.length;

	for (let i = 0; i < gameLength; i++) {

		let cardsToPlay = [];

		for (let i = 0; i < myCards.length; i++) {
			if (myCards[i].color === lastCard.color || myCards[i].number === lastCard.number) {
				cardsToPlay.push(myCards[i]);
			}
		}

		lastCard = cardsToPlay[0];
		const index = myCards.indexOf(lastCard);
		if (index != null) {
			myCards.splice(index, 1);
		}

		const newPlay = new Play({
			color: lastCard.color,
			number: lastCard.number,
		});
		newPlay.save();
	}
}

playUno(cards, lastPlay)

module.exports = playUno;