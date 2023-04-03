const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
street: String,
city: String,
zipCode: String,
isFavorite: Boolean,


});

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	inscriptionDate: Date,
	addresses: [addressSchema],
	
});

const User = mongoose.model('users', userSchema);

module.exports = User;
