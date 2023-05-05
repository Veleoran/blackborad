const mongoose = require('mongoose');
const express = require('express');
mongoose.connect('mongodb://localhost/locapic', { useNewUrlParser: true, useUnifiedTopology: true });


const placeSchema = mongoose.Schema({
  nickname: String,
  name: String,
  latitude: Number,
  longitude: Number,
});

const Place = mongoose.model('places', placeSchema);

module.exports = Place;

