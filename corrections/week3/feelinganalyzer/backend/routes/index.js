var express = require('express');
var router = express.Router();

const Sentiment = require('sentiment');
const sentiment = new Sentiment();

router.post('/analyze', (req, res) => {
  if (req.body.message) {
    const score = sentiment.analyze(req.body.message).score;
    res.json({ result: true, score });
  } else {
    res.json({ result: false });
  }
});

module.exports = router;
