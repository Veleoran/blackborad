var express = require('express');
const { checkAdminPassword } = require('../modules/checkPasswords');
var router = express.Router();

router.post('/login', (req, res) => {
   
    if (checkAdminrPassword(req.body.password)) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });
  
  router.post('/supersecretaction', (req, res) => {
   
    if  (checkModeratorPassword(req.body.password)) {
      res.json({ result: true });
    }
    else {
      res.json({ result: false, error: 'Invalid password for admin' });
    }
  });
  
  module.exports = router;
  

