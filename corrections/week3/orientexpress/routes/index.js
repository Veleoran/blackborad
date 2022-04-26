var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res) => {
  trips.push({ departure: req.body.departure, arrival: req.body.arrival });
  res.json({ allTrips: trips });
});

router.get('/trips', (req, res) => {
  res.json({ allTrips: trips });
});

router.get('/lastTrip', (req, res) => {
  res.json({ lastTrip: trips[trips.length - 1] });
});

router.put('/trips/:departure/:arrival', (req, res) => {
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].departure === req.params.departure && trips[i].arrival === req.params.arrival) {
      trips[i] = { departure: req.body.departure, arrival: req.body.arrival };
    }
  }

  res.json({ allTrips: trips });
});

router.delete('/trips', (req, res) => {
  trips = [];
  res.json({ allTrips: trips });
});

module.exports = router;
