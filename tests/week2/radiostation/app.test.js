const Emission = require('./models/emissions');
const Song = require('./models/songs');

it('Checks emissions schema & model', () => {
	expect(Emission).toBeDefined();

	const newEmission = new Emission({
		name: 'NAME',
		mainAnimator: 'ANIMATOR',
		nbAnimators: 5,
		discontinued: true,
	});

	expect(newEmission).toHaveProperty('_id');
	expect(newEmission).toHaveProperty('name', 'NAME');
	expect(newEmission).toHaveProperty('mainAnimator', 'ANIMATOR');
	expect(newEmission).toHaveProperty('nbAnimators', 5);
	expect(newEmission).toHaveProperty('discontinued', true);
});

it('Checks songs schema & model', () => {
	expect(Song).toBeDefined();

	const creationDate = new Date();
	const newSong = new Song({
		artist: 'ARTIST',
		title: 'TITLE',
		creationDate,
		annoying: false,
	});

	expect(newSong).toHaveProperty('_id');
	expect(newSong).toHaveProperty('artist', 'ARTIST');
	expect(newSong).toHaveProperty('title', 'TITLE');
	expect(newSong).toHaveProperty('creationDate', creationDate);
	expect(newSong).toHaveProperty('annoying', false);
});
