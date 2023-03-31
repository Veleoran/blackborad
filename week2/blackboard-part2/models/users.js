const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
 firstName: String,
 lastName: String,
 email: String,
 inscriptionDate :Date
});

const User = mongoose.model('users', userSchema);

module.exports = User;