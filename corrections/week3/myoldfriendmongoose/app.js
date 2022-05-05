const Country = require('./models/countries');
const City = require('./models/cities');


// Create country with name, flag name, currency and population
function createCountry(name, flagImg, currency, population) {
	const newCountry = new Country({
		name: name,
		flagImg: flagImg,
		currency: currency,
		population: population,
	});

	newCountry.save().then(() => {
		console.log(`Country ${name} created`);
	});
}
// Sample call:
// createCountry('Australia', 'autralia.png', 'AUD', [
//  { populationNbr: 25400000, year: new Date('2015-08-24') },
// ]);


// Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
	const newCity = new City({
		name: name,
		currentPopulation: currentPopulation,
		country: countryId,
	});

	newCity.save().then(() => {
		console.log(`City ${name} created`);
	});
}
// Sample call:
// createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');


// This function answers the following question: What is and were the population of this country?
function displayCountryPopulation(countryName) {
	Country.findOne({ name: countryName })
		.then(data => {
			console.log('POPULATION =>', data.population);
		});
}

// This function answers the following question: In which country this city is located?
// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) {
	City.findOne({ name: cityName })
		.populate('country')
		.then(data => {
			console.log('COUNTRY =>', data.country);
		});
}


module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
