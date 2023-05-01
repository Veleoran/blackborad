var express = require('express');
var router = express.Router();

const data = require('../data');

router.get('/byId/:id', (req, res) => {
	const { id } = req.params;

	const product = data.find(product => product.id === Number(id));

	res.json({ product });
});

router.get('/byBatchId/:id', (req, res) => {
	const { id } = req.params;

	const product = data.find(product => product.batches.find(batch => batch.id === Number(id)));

	res.json({ product });
});

router.get('/byBrand/:brand', (req, res) => {
	const { brand } = req.params;

	const products = data.filter(product => product.brand === brand);

	res.json({ products });
});

module.exports = router;
