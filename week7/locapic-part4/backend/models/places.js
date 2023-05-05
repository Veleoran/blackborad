const express = require('express');
const mongoose = require('mongoose');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/locapic', { useNewUrlParser: true, useUnifiedTopology: true });

const placeSchema = new mongoose.Schema({
  nickname: String,
  name: String,
  latitude: Number,
  longitude: Number,
});

const Place = mongoose.model('Place', placeSchema);

app.post('/places', async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.send({ result: true });
});

app.get('/places/:nickname', async (req, res) => {
  const places = await Place.find({ nickname: req.params.nickname });
  res.send({ result: true, places });
});

app.delete('/places/:nickname/:name', async (req, res) => {
  await Place.deleteOne({ nickname: req.params.nickname, name: req.params.name });
  res.send({ result: true });
});

app.listen(3000, () => console.log('Server started on port 3000'));
