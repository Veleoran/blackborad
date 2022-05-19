var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productsRouter = require('./routes/products');
var recallsRouter = require('./routes/recalls');
var pricesRouter = require('./routes/prices');
var stocksRouter = require('./routes/stocks');

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);
app.use('/recalls', recallsRouter);
app.use('/prices', pricesRouter);
app.use('/stocks', stocksRouter);

module.exports = app;
