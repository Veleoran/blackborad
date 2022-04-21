const mongoose = require('mongoose');

const leaderSchema = mongoose.Schema({
	firstName: String,
	lastName:	String,
	electionDate: Date,
});

const countrySchema = mongoose.Schema({
	name: String,
	currency: String,
	leaders: [leaderSchema],
});

const Country = mongoose.model('countries', countrySchema);

module.exports = Country;
