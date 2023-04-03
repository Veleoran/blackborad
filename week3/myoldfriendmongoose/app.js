require('./models/connection');
const Country = require('./models/countries');
const City = require('./models/cities');


 //Create country with name, flag image, currency and population
function createCountry(name, flagImg, currency, population) { 
  const newCountry = new Country({
    name: name,
    flagImg: flagImg,
    currency: currency,
    population: population,
  })
}
// Sample call:
createCountry('Australia', 'autralia.png', 'AUD', [
  { populationNbr: 25400000, year: new Date('2015-08-24') },
 ]);
const newCountry = new countries({
    name:'Australia'
    flagImg: 'australia.png',
    currency: 'AUD',
    population: [{ populationNbr: 25400000, year: new Date('2015-08-24')
    }]);


}

 Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
    const newCity = new City({
    name: name,
    currentPopulation: currentPopulation,
    countryId: countryId,
 })
}
// Sample call:
 createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');

 const newCity = new City({
    name: 'Sydney',
    currentPopulation: '5312163',
    countryId: 'COUNTRY_ID_TO_REPLACE'
 });


// Display country population from country name
function displayCountryPopulation(countryName) {
    Population.findOne({ countryName: 'Australia'})
    .then(data => {
        console.log(data);
    })

 }


// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) { }


module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
