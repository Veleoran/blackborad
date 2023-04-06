var express = require('express');
var router = express.Router();
const { checkModeratorPassword } = require('../modules/checkPasswords');



router.post('/login', (req, res) => {
    const password = 'modpwd123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });
  
  router.post('/secretaction', (req, res) => {
    const password = 'adminazerty123';
    if (req.body.password === password) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for moderator' });
    }
  });
  module.exports = router;
  