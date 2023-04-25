const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    passeword: String,
});
const User = mongoose.model("users", userSchema);

module.exports = User;
