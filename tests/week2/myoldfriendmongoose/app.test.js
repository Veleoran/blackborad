const mongoose = require('mongoose');
const Country = require('./models/countries');
const City = require('./models/cities');
const { createCountry, createCity, displayCountryLeaders, displayCountryFromCityName } = require('./app');

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(Country.prototype, 'save').mockResolvedValue({});
	jest.spyOn(City.prototype, 'save').mockResolvedValue({});
	jest.spyOn(Country, 'findOne').mockResolvedValue({});
	jest.spyOn(City, 'findOne').mockReturnValue({ populate: jest.fn((field) => Promise.resolve({ field })), then: jest.fn() });
});

const countryName = 'France';
const countryCurrency = 'EUR';
const countryLeaders = [
	{ firstName: 'Mr', lastName: 'President', electionDate: new Date('2010-01-01') },
	{ firstName: 'Ms', lastName: 'President', electionDate: new Date('2000-01-01') },
];
const cityName = 'Paris';
const cityPopulation = 2165423;

it('Creates country', () => {
	createCountry(countryName, countryCurrency, countryLeaders);

	const _country = new Country();
	const lastInstanceIndex = _country.save.mock.instances.length - 1;
	expect(_country.save).toHaveBeenCalled();
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('name', countryName);
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('currency', countryCurrency);
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('leaders')
	expect(_country.save.mock.instances[lastInstanceIndex].leaders).toEqual(expect.arrayContaining(
		[expect.objectContaining(countryLeaders[0])],
		[expect.objectContaining(countryLeaders[1])],
	));;
});

it('Creates city', () => {
	const newCountry = new Country({
		name: countryName,
		currency: countryCurrency,
		leaders: countryLeaders,
	});

	createCity(cityName, cityPopulation, newCountry._id);

	const _city = new City();
	const lastInstanceIndex = _city.save.mock.instances.length - 1;
	expect(_city.save).toHaveBeenCalled();
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('name', cityName);
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('population', cityPopulation);
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('country', newCountry._id);
});

it('Finds country by name', () => {
	displayCountryLeaders(countryName);

	expect(Country.findOne).toHaveBeenCalled();
	expect(Country.findOne.mock.lastCall[0]).toHaveProperty('name', countryName);
});

it('Finds city country by city name (with populate)', () => {
	displayCountryFromCityName(cityName);

	const lastInstanceIndex = City.findOne.mock.results.length - 1;
	expect(City.findOne).toHaveBeenCalled();
	expect(City.findOne.mock.lastCall[0]).toHaveProperty('name', cityName);
	expect(City.findOne.mock.results[lastInstanceIndex].value.populate).toHaveBeenCalled();
	expect(City.findById.mock.results[lastInstanceIndex].value.populate.mock.lastCall[0]).toBe('country');
});

afterAll(() => {
	mongoose.connection.close();
});
