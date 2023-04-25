var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
const userController = require('../controllers/userController');
require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', async (req, res) => {
	if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  // Check if the user has not already been registered
  const data = await User.findOne({ username: req.body.username });
  if (data === null) {
    const token = uid2(32);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      token: token,
    });

    newUser.save().then(() => {
      res.json({ result: true, token: token });
    });
  } else {
    // User already exists in database
    res.json({ result: false, error: 'User already exists' });
  }
});

router.post('/signin', async (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }
  

  const user = await User.findOne({ username: req.body.username });

  if (user) {
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (passwordIsValid) {
      res.json({ result: true, token: user.token });
    } else {
      res.json({ result: false, error: 'Invalid password' });
    }
  } else {
    res.json({ result: false, error: 'User not found' });
  }
});

router.get('/users/canBookmark/:token', userController.canBookmark);
router.get('/canBookmark/:token', userController.canBookmark);

module.exports = router;
