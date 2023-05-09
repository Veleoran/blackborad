const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Place = require('../models/places')
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');


// POST /places
router.post('/places', async (req, res) => {
  const { nickname, name, latitude, longitude } = req.body;
  const newPlace = new Place({ nickname, name, latitude, longitude });

  try {
    await newPlace.save();
    res.json({ result: true });
  } catch (error) {
    res.status(500).json({ result: false, message: 'Error saving the place' });
  }
});
// GET /places/:nickname
router.get('/places/:nickname', (req, res) => {
  Place.find({ nickname: req.params.nickname }).then(data => {
    res.json({ result: true, places: data });
  });
 });
// DELETE /places/:nickname/:name
router.delete('/places/:nickname/:name', async (req, res) => {
  // Code pour la route DELETE ici
});

const app = express();
app.use(express.json());

module.exports = router;