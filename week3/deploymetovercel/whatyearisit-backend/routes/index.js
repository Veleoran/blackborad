var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET year. */
router.get("/year", function (req, res, next) {
  const year = new Date().getFullYear().toString();
  res.json({ year: year });
});


module.exports = router;
