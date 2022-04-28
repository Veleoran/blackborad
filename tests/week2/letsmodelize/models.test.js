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

	const newCountry = new Country({
		name: 'Australia',
		flagImg: 'australia.png',
		currency: 'AUD',
		population: [
			{ populationNbr: 25400000, year: new Date('2015-08-24') },
			{ populationNbr: 26100000, year: new Date('2020-09-15') },
		],
	});

	const newCity = new City({
		name: 'Sydney',
		currentPopulation: 5312163,
		country: newCountry._id,
	});

	expect(newCity).toHaveProperty('_id');
	expect(newCity).toHaveProperty('name', 'Sydney');
	expect(newCity).toHaveProperty('currentPopulation', 5312163);
	expect(newCity).toHaveProperty('country', newCountry._id);
});
