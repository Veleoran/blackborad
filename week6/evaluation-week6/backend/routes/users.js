var express = require('express');
var router = express.Router();

const uid2 = require("uid2");


router.post('/signup', (req, res) => {
	const newUserInfos = {
		username: req.body.username,
		token: uid2(32), // Change this line by using uid2
	};

	res.json({ result: true, newUserInfos: newUserInfos });
});

module.exports = router;
