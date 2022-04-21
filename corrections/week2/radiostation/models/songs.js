const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
	artist: String,
	title: String,
	creationDate: Date,
	annoying: Boolean,
});

const Song = mongoose.model('songs', songSchema);

module.exports = Song;