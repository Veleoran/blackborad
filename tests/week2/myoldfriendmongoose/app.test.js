const mongoose = require('mongoose');
const Country = require('./models/countries');
const City = require('./models/cities');
const { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName } = require('./app');

beforeAll(() => {
	// TODO Antoine: Mock real return values
	jest.spyOn(Country.prototype, 'save').mockResolvedValue({});
	jest.spyOn(City.prototype, 'save').mockResolvedValue({});
	jest.spyOn(Country, 'findOne').mockResolvedValue({});
	jest.spyOn(City, 'findOne').mockReturnValue({ populate: jest.fn((field) => Promise.resolve({ field })), then: jest.fn() });
});

const countryName = 'France';
const countryFlag = 'france.png';
const countryCurrency = 'EUR';
const countryPopulation = [
	{ populationNbr: 63300000, year: new Date('2019-01-24') },
	{ populationNbr: 65600000, year: new Date('2021-01-15') },
];
const cityName = 'Paris';
const cityCurrentPopulation = 2165423;

it('Creates country', () => {
	createCountry(countryName, countryFlag, countryCurrency, countryPopulation);

	const _country = new Country();
	const lastInstanceIndex = _country.save.mock.instances.length - 1;
	expect(_country.save).toHaveBeenCalled();
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('name', countryName);
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('flagImg', countryFlag);
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('currency', countryCurrency);
	expect(_country.save.mock.instances[lastInstanceIndex]).toHaveProperty('population')
	expect(_country.save.mock.instances[lastInstanceIndex].population).toEqual(expect.arrayContaining(
		[expect.objectContaining(countryPopulation[0])],
		[expect.objectContaining(countryPopulation[1])],
	));;
});

it('Creates city', () => {
	const newCountry = new Country({
		name: countryName,
		countryFlag: countryFlag,
		currency: countryCurrency,
		population: countryPopulation,
	});

	createCity(cityName, cityCurrentPopulation, newCountry._id);

	const _city = new City();
	const lastInstanceIndex = _city.save.mock.instances.length - 1;
	expect(_city.save).toHaveBeenCalled();
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('name', cityName);
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('currentPopulation', cityCurrentPopulation);
	expect(_city.save.mock.instances[lastInstanceIndex]).toHaveProperty('country', newCountry._id);
});

it('Finds country by name', () => {
	displayCountryPopulation(countryName);

	expect(Country.findOne).toHaveBeenCalled();
	expect(Country.findOne.mock.lastCall[0]).toHaveProperty('name', countryName);
});

it('Finds city country by city name (with populate)', () => {
	displayCountryFromCityName(cityName);

	const lastInstanceIndex = City.findOne.mock.results.length - 1;
	expect(City.findOne).toHaveBeenCalled();
	expect(City.findOne.mock.lastCall[0]).toHaveProperty('name', cityName);
	expect(City.findOne.mock.results[lastInstanceIndex].value.populate).toHaveBeenCalled();
	expect(City.findOne.mock.results[lastInstanceIndex].value.populate.mock.lastCall[0]).toBe('country');
});

afterAll(() => {
	mongoose.connection.close();
});

