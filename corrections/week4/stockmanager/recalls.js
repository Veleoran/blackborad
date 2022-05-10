const moment = require('moment');
const data = require('./data');

function getRecalledProductsByBrand(brand) {
	const productsRecalled = data.filter(product => product.brand === brand && product.batches.find(batch => batch.recall));
	return productsRecalled.map(product => product.id);
}

function getRecalledProductsByTimestamp(timestamp) {
	const date = moment(timestamp).format('YYYY-MM-DD');
	const productsRecalled = data.filter(product => product.batches.find(batch => batch.recall && batch.expirationDate === date));
	return productsRecalled.map(product => product.id);
}

module.exports = { getRecalledProductsByBrand, getRecalledProductsByTimestamp };
