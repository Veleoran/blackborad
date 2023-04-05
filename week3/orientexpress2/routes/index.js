require('../models/connection');
const Trip = require('../models/trips');

var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res) => {
  const newTrip = new Trip({ 
    departure: req.body.departure, 
    arrival: req.body.arrival 
  });
  newTrip.save()
  .then(() => {
    Trip.find().then(data => {
      res.json({ allTrips: data });
    })
  })
});

router.get('/trips', (req, res) => {
  Trip.find().then(data => {
  res.json({ allTrips: data });
})
});

router.get('/lastTrip', (req, res) => {
  Trip.find().then(data => {
    res.json({ lastTrip: data[data.length - 1] });  
  });
});

router.delete('/trips', (req, res) => {

  Trip.deleteMany({}).then(data => {

  res.json({ allTrips: data });
});

})

module.exports = router;
