
const Country = require('./models/countries');

const newCountry = new Country({
    name: 'France',
    flagmg: 'drapeau tricolore',
    currency: 'Euro',
    population: [{
        populationNbr: 68000000 },

        {year: 2020 },

    ],
});
newCountry.save().then(() => {
    console.log('Country saved!');
});