const Country = require('./models/countries');
const City = require('./models/cities');


// Create country with name, currency and leaders
function createCountry(name, currency, leaders) {}
// Sample call:
// createCountry('Australia', 'AUD', [
//  { firstName: 'Scott', lastName: 'Morrison', electionDate: new Date('2018-08-24') },
// ]);


// Create city with name, population and country foreign key
function createCity(name, population, countryId) {}
// Sample call:
// createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');


// Display country leaders from country name
function displayCountryLeaders(countryName) {}


// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) {}


module.exports = { createCountry, createCity, displayCountryLeaders, displayCountryFromCityName }; // Do not edit/remove this line
