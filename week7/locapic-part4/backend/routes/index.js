var express = require('express');
var router = express.Router();

module.exports = router;


router.post('/places', (req, res) => {
    const { nickname, name, latitude, longitude } = req.body;
    const newPlace = new Place({ nickname, name, latitude, longitude });
   
    newPlace.save().then(() => {
      res.json({ result: true });
    });
   });