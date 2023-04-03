// Insert your code here
const mongoose = require('mongoose');

const populationSchema = mongoose.Schema({
 populationNbr: Number,
 year: Date,
});

const countrySchema = mongoose.Schema({
 name: String,
 flagmg: String,
 currency: String,
 population :populationSchema,
 image:String
});

const Country = mongoose.model('countries', countrySchema);

