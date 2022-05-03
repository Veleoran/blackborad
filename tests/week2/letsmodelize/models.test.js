const Country = require('./models/countries');
const City = require('./models/cities');

it('Countries schema & model', () => {
	expect(Country).toBeDefined();

	const newCountry = new Country({
		name: 'Australia',
		flagImg: 'australia.png',
		currency: 'AUD',
		population: [
			{ populationNbr: 25400000, year: new Date('2015-08-24') },
			{ populationNbr: 26100000, year: new Date('2020-09-15') },
		],
	});

	expect(newCountry).toHaveProperty('_id');
	expect(newCountry).toHaveProperty('name', 'Australia');
	expect(newCountry).toHaveProperty('flagImg', 'australia.png');
	expect(newCountry).toHaveProperty('currency', 'AUD');
	expect(newCountry).toHaveProperty('population');
	expect(newCountry.population).toEqual(expect.arrayContaining(
		[expect.objectContaining({ populationNbr: 25400000, year: new Date('2015-08-24') })],
		[expect.objectContaining({ populationNbr: 26100000, year: new Date('2020-09-15') })],
	));
});

it('Cities schema & model', () => {
	expect(City).toBeDefined();

	const newFakeCountry = new Country({
		name: 'Australia',
		flagImg: 'australia.png',
		currency: 'AUD',
		population: [
			{ populationNbr: 25400000, year: new Date('2015-08-24') },
			{ populationNbr: 26100000, year: new Date('2020-09-15') },
		],
	});

	const newFakeCity = new City({
		name: 'Sydney',
		currentPopulation: 5312163,
		country: newFakeCountry._id,
	});

	expect(newFakeCity).toHaveProperty('_id');
	expect(newFakeCity).toHaveProperty('name', 'Sydney');
	expect(newFakeCity).toHaveProperty('currentPopulation', 5312163);
	expect(newFakeCity).toHaveProperty('country', newFakeCountry._id);
});
