const Country = require('./models/countries');
const City = require('./models/cities');

it('Checks countries schema & model', () => {
	expect(Country).toBeDefined();

	const newCountry = new Country({
		name: 'Australia',
		currency: 'AUD',
		leaders: [
			{ firstName: 'Scott', lastName: 'Morrison', electionDate: new Date('2018-08-24') },
			{ firstName: 'Malcolm', lastName: 'Turnbull', electionDate: new Date('2015-09-15') },
		],
	});

	expect(newCountry).toHaveProperty('_id');
	expect(newCountry).toHaveProperty('name', 'Australia');
	expect(newCountry).toHaveProperty('currency', 'AUD');
	expect(newCountry).toHaveProperty('leaders');
	expect(newCountry.leaders).toEqual(expect.arrayContaining(
		[expect.objectContaining({ firstName: 'Scott', lastName: 'Morrison', electionDate: new Date('2018-08-24') })],
		[expect.objectContaining({ firstName: 'Malcolm', lastName: 'Turnbull', electionDate: new Date('2015-09-15') })],
	));
});

it('Checks cities schema & model', () => {
	expect(City).toBeDefined();

	const newCountry = new Country({
		name: 'Australia',
		currency: 'AUD',
		leaders: [
			{ firstName: 'Scott', lastName: 'Morrison', electionDate: new Date('2018-08-24') },
			{ firstName: 'Malcolm', lastName: 'Turnbull', electionDate: new Date('2015-09-15') },
		],
	});

	const newCity = new City({
		name: 'Sydney',
		population: 5312163,
		country: newCountry._id,
	});

	expect(newCity).toHaveProperty('_id');
	expect(newCity).toHaveProperty('name', 'Sydney');
	expect(newCity).toHaveProperty('population', 5312163);
	expect(newCity).toHaveProperty('country', newCountry._id);
});
