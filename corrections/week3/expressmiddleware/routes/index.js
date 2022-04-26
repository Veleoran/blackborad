var express = require('express');
var router = express.Router();

router.get('/message', (req, res) => {
  res.json({ result: true, message: 'Hello world!' });
});

module.exports = router;
