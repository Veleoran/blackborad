var express = require('express');
var router = express.Router();

let weather = [
  { city: 'London', description: 'cloudy', tempMin: 12.95, tempMax: 17.39 },
  { city: 'Rio de Janeiro', description: 'sunny', tempMin: 23.98, tempMax: 28.63 },
  { city: 'Stockholm', description: 'sunny', tempMin: 6.03, tempMax: 10.59 },
];

// Insert your code here

module.exports = router;
