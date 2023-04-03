const mongoose = require('mongoose');
require('./models/connection');
const Country = require('./models/countries');
const City = require('./models/cities');


 //Create country with name, flag image, currency and populatio
function createCountry(name, flagimage, currency, population) { 
  const newCountry = new Country({
    name: name,
    flagimage: flagimage,
    currency: currency,
    population: population,
  });
  newCountry.save();
}
// // Sample call:
createCountry('Australia', 'australia.png', 'AUD', [
{ populationNbr: 25400000, year: new Date('2015-08-24') },
]);

//  Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
    const newCity = new City({
    name: name,
    currentPopulation: currentPopulation,
    countryId: countryId,
 });
 return newCity.save(); 
}
// Sample call:
//  createCity('Sydney', 5312163,  { type: mongoose.Schema.Types.ObjectId, ref: 'countries' } );



// Display country population from country name
function displayCountryPopulation(countryName) {
    Country.findOne({ name: 'countryName'})
    .populate('city')
    .then(data => {
        console.log(data.population);
    })
    .catch(err => {
    console.log('Error', err);

 });
}



// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) {
    City.findOne({name: cityName})
    .populate('countryId')
     then(data => {
        console.log(data.countryId);
     
     })
     .catch(err => {
        console.log('Error', err);
     });
    }



module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
