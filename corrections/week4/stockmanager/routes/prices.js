var express = require('express');
var router = express.Router();

const data = require('../data');

router.get('/average/:brand', (req, res) => {
	const { brand } = req.params;

	const products = data.filter(product => product.brand === brand);
	const average = products.reduce((acc, { price }) => acc + price, 0) / products.length;

	res.json({ average: Number(average.toFixed(2)) });
});

router.get('/averageUnit/:brand', (req, res) => {
	const { brand } = req.params;

	const products = data.filter(product => product.brand === brand);
	const average = products.reduce((acc, { unitPrice }) => acc + unitPrice, 0) / products.length;

	res.json({ average: Number(average.toFixed(2)) });
});

router.get('/median/:brand', (req, res) => {
	const { brand } = req.params;

	const products = data.filter(product => product.brand === brand);
	const prices = products.map(product => product.price).sort();

	const half = Math.floor(prices.length / 2);
	const median = prices.length % 2 ? prices[half] : (prices[half - 1] + prices[half]) / 2;

	res.json({ median: Number(median.toFixed(2)) });
});

router.get('/medianUnit/:brand', (req, res) => {
	const { brand } = req.params;

	const products = data.filter(product => product.brand === brand);
	const prices = products.map(product => product.unitPrice).sort();

	const half = Math.floor(prices.length / 2);
	const median = prices.length % 2 ? prices[half] : (prices[half - 1] + prices[half]) / 2;

	res.json({ median: Number(median.toFixed(2)) });
});

module.exports = router;
