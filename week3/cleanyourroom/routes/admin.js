var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
    const password = 'adminazerty123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });
  
  router.post('/supersecretaction', (req, res) => {
    const password = 'adminazerty123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });
  
  module.exports = router;
  

