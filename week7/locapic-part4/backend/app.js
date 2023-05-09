
require('dotenv').config();

var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const placesRoutes = require('./routes/placesRoutes');

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/locapic', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/', indexRouter);

app.use('/api', placesRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));
module.exports = app;
