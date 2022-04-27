const Country = require('./models/countries');
const City = require('./models/cities');


// Create country with name, currency and leaders
function createCountry(name, currency, leaders) {
	const newCountry = new Country({
		name: name,
		currency: currency,
		leaders: leaders,
	});

	newCountry.save().then(() => {
		console.log(`Country ${name} created`);
	});
}
// Sample call:
// createCountry('Australia', 'AUD', [
//  { firstName: 'Scott', lastName: 'Morrison', electionDate: new Date('2018-08-24') },
// ]);


// Create city with name, population and country foreign key
function createCity(name, population, countryId) {
	const newCity = new City({
		name: name,
		population: population,
		country: countryId,
	});

	newCity.save().then(() => {
		console.log(`City ${name} created`);
	});
}
// Sample call:
// createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');


// This function answers the following question: Who are the leaders of this country?
function displayCountryLeaders(countryName) {
	Country.findOne({ name: countryName })
		.then(data => {
			console.log('LEADERS =>', data.leaders);
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


module.exports = { createCountry, createCity, displayCountryLeaders, displayCountryFromCityName }; // Do not edit/remove this line
