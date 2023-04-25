const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  canBookmark: { type: Boolean, default: true },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
