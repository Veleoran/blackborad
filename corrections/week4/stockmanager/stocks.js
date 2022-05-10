const moment = require('moment');
const data = require('./data');

function getStock(productId, recalled = false) {
	const products = data.find(product => product.id === productId);
	const batches = products.batches.filter(batch => batch.recall === recalled);
	return batches.reduce((acc, product) => acc + product.quantity, 0);
}

function getStockByTimestamps(productId, startTimestamp, endTimestamp) {
	const startDate = moment(startTimestamp).format('YYYY-MM-DD');
	const endDate = moment(endTimestamp).format('YYYY-MM-DD');

	const products = data.find(product => product.id === productId);
	const batches = products.batches.filter(batch => batch.expirationDate >= startDate && batch.expirationDate <= endDate);
	return batches.reduce((acc, product) => acc + product.quantity, 0);
}

module.exports = { getStock, getStockByTimestamps };
