var express = require('express');
var router = express.Router();

const moment = require('moment');
const data = require('../data');

router.get('/byBrand/:brand', (req, res) => {
	const { brand } = req.params;

	const productsRecalled = data.filter(product => product.brand === brand && product.batches.find(batch => batch.recall));
	const products = productsRecalled.map(product => product.id);

	res.json({ products });
});

router.get('/byTimestamp/:timestamp', (req, res) => {
	const { timestamp } = req.params;

	const date = moment(Number(timestamp)).format('YYYY-MM-DD');
	const productsRecalled = data.filter(product => product.batches.find(batch => batch.recall && batch.expirationDate === date));
	const products = productsRecalled.map(product => product.id);

	res.json({ products });
});

module.exports = router;
