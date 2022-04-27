var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// authorization middleware
const apiKeys = ['azerty123', 'supersecretapikey'];
app.use(function(req, res, next) {
  if (!req.headers.key || !apiKeys.includes(req.headers.key)) {
    return res.status(403).json({ result: false, error: 'Invalid API key' });
  }
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
