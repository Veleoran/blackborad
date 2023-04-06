var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
  res.json({ message: 'Welcome to /home' });
});

router.get('/about', (req, res) => {
  res.json({ message: 'Welcome to /about' });
});


const { checkModeratorPassword} = require('../modules/checkPasswords');

router.post('/moderator/login', (req, res) => {
  checkModeratorPassword('POST /login');
  const password = 'modpwd123';
  if (req.body.password === password) {
    res.json({ result: true });
  }
  else {
    res.json({ result: false, error: 'Invalid password for moderator' });
  }
});

router.post('/moderator/secretaction', (req, res) => {
  checkModeratorPassword('POST/secretaction')
  const password = 'modpwd123';
  if (req.body.password === password) {
    res.json({ result: true });
  }
  else {
    res.json({ result: false, error: 'Invalid password for moderator' });
  }
});

const {checkAdminPassword} = require('../modules/checkPasswords')

router.post('/admin/login', (req, res) => {
  checkAdminPassword('POST/login')
  const password = 'adminazerty123';
  if (req.body.password === password) {
    res.json({ result: true });
  }
  else {
    res.json({ result: false, error: 'Invalid password for admin' });
  }
});

router.post('/admin/supersecretaction', (req, res) => {
  checkAdminPassword('POST/supersecretaction')
  const password = 'adminazerty123';
  if (req.body.password === password) {
    res.json({ result: true });
  }
  else {
    res.json({ result: false, error: 'Invalid password for admin' });
  }
});

module.exports = router;
