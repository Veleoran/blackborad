const Play = require('./models/plays');
const playUno = require('./app');

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(Play.prototype, 'save').mockResolvedValue({});
});

it('Checks plays schema & model', () => {
	expect(Play).toBeDefined();

	const newPlay = new Play({
		color: 'green',
		number: 2,
	});

	expect(newPlay).toHaveProperty('_id');
	expect(newPlay).toHaveProperty('color', 'green');
	expect(newPlay).toHaveProperty('number', 2);
});

it('Plays uno', () => {
	const cards = [
		{ color: 'blue', number: 5 },
		{ color: 'red', number: 5 },
		{ color: 'blue', number: 1 },
		{ color: 'red', number: 2 },
	];
	const lastPlay = { color: 'green', number: 2 };

	playUno(cards, lastPlay);

	const playedCards = [
		{ color: 'red', number: 2 },
		{ color: 'red', number: 5 },
		{ color: 'blue', number: 5 },
		{ color: 'blue', number: 1 },
	];

	const _play = new Play();
	expect(_play.save.mock.instances.length).toBe(playedCards.length);
	for (let i = 0; i < playedCards.length; i++) {
		expect(_play.save.mock.instances[i]).toHaveProperty('color', playedCards[i].color);
		expect(_play.save.mock.instances[i]).toHaveProperty('number', playedCards[i].number);
	}
});
