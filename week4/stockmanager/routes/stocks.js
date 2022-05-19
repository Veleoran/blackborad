var express = require('express');
var router = express.Router();

const moment = require('moment');
const data = require('../data');

router.get('/byProductId/:productId', (req, res) => {
	const { productId } = req.params;

	const products = data.find(product => product.id === Number(productId));
	const stocks = products.batches.reduce((acc, product) => acc + product.quantity, 0);

	res.json({ stocks });
});

router.get('/byTimestamp', (req, res) => {
	const { productId, start, end } = req.query;

	const startDate = moment(Number(start)).format('YYYY-MM-DD');
	const endDate = moment(Number(end)).format('YYYY-MM-DD');

	const products = data.find(product => product.id === Number(productId));
	const batches = products.batches.filter(batch => batch.expirationDate >= startDate && batch.expirationDate <= endDate);
	const stocks = batches.reduce((acc, product) => acc + product.quantity, 0);

	res.json({ stocks });
});

module.exports = router;
