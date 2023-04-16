const express = require('express');
const router = express.Router();

// Tableau global pour stocker les trajets
const trips = [];

// POST /trips : ajoute un nouveau trajet dans le tableau trips
router.post('/trips', (req, res) => {
  trips.push({ departure: req.body.departure, arrival: req.body.arrival });
  res.json({ allTrips: trips });
});

// GET /trips : renvoie tous les trajets du tableau trips
router.get('/trips', (req, res) => {
  res.json({ allTrips: trips });
});

// GET /lastTrip : renvoie seulement le tout dernier trajet du tableau trips
router.get('/lastTrip', (req, res) => {
  const lastTrip = trips.length > 0 ? trips[trips.length - 1] : null;
  res.json({ lastTrip: lastTrip });
});

// DELETE /trips : vide tous les trajets
router.delete('/trips', (req, res) => {
  trips.length = 0;
  res.json({ message: 'All trips deleted', allTrips: trips });
});

module.exports = router;
