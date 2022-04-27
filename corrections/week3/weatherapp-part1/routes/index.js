var express = require('express');
var router = express.Router();

let weather = [
  { city: 'London', description: 'cloudy', tempMin: 12.95, tempMax: 17.39 },
  { city: 'Rio de Janeiro', description: 'sunny', tempMin: 23.98, tempMax: 28.63 },
  { city: 'Stockholm', description: 'sunny', tempMin: 6.03, tempMax: 10.59 },
];

router.post('/weather', (req, res) => {
  if (!weather.some(element => element.city === req.body.city)) {
    weather.push({
      city: req.body.city,
      description: req.body.description,
      tempMin: req.body.tempMin,
      tempMax: req.body.tempMax,
    });
    res.json({ result: true, weather });
  } else {
    res.json({ result: false });
  }
});

router.get('/weather', (req, res) => {
  res.json({ weather });
});

router.get('/weather/:city', (req, res) => {
  const searchedWeather = weather.find(element => element.city === req.params.city);
  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false });
  }
});

router.delete('/weather/:city', (req, res) => {
  const searchedWeather = weather.find(element => element.city === req.params.city);
  if (searchedWeather) {
    weather = weather.filter(element => element.city !== req.params.city);
    res.json({ result: true, weather });
  } else {
    res.json({ result: false });
  }
});

module.exports = router;
