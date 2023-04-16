var express = require('express');
var router = express.Router();

let weather = [
  { cityName: 'London', description: 'cloudy', tempMin: 12.95, tempMax: 17.39 },
  { cityName: 'Rio de Janeiro', description: 'sunny', tempMin: 23.98, tempMax: 28.63 },
  { cityName: 'Stockholm', description: 'sunny', tempMin: 6.03, tempMax: 10.59 },
];

router.post('/weather', (req, res) => {
  const cityName = req.body.cityName.toLowerCase();
  const description = req.body.description;
  const tempMin = req.body.tempMin;
  const tempMax = req.body.tempMax;

  const cityExists = weather.find(city => city.cityName.toLowerCase() === cityName);

  if (cityExists) {
    res.json({ result: false, error: 'City already saved' });
  } else {
    const newCity = { cityName, description, tempMin, tempMax };
    weather.push(newCity);
    res.json({ result: true, weather: newCity });
  }
});
router.get('/weather', (req, res) => {
  res.json({ weather: weather });
});
router.get('/weather/:cityName', (req, res) => {
  const cityName = req.params.cityName.toLowerCase();
  const city = weather.find(city => city.cityName.toLowerCase() === cityName);

  if (city) {
    res.json({ result: true, weather: city });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});
router.delete('/weather/:cityName', (req, res) => {
  const cityName = req.params.cityName.toLowerCase();
  const cityIndex = weather.findIndex(city => city.cityName.toLowerCase() === cityName);

  if (cityIndex !== -1) {
    weather.splice(cityIndex, 1);
    res.json({ result: true, weather: weather });
  } else {
    res.json({ result: false, error: 'City not found' });
  }
});
module.exports = router;
