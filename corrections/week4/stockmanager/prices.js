const data = require('./data');

function getAveragePrice(brand) {
	const products = data.filter(product => product.brand === brand);
	const prices = products.map(product => product.price);
	const average = prices.reduce((acc, price) => acc + price, 0) / prices.length;
	return Number(average.toFixed(2));
}

function getAverageUnitPrice(brand) {
	const products = data.filter(product => product.brand === brand);
	const unitPrices = products.map(product => product.unitPrice);
	const average = unitPrices.reduce((acc, price) => acc + price, 0) / unitPrices.length;
	return Number(average.toFixed(2));
}

function getMedianPrice(brand) {
	const products = data.filter(product => product.brand === brand);
	const prices = products.map(product => product.price).sort();

	const half = Math.floor(prices.length / 2);
	const median = prices.length % 2 ? prices[half] : (prices[half - 1] + prices[half]) / 2;
	return Number(median.toFixed(2));
}

function getMedianUnitPrice(brand) {
	const products = data.filter(product => product.brand === brand);
	const prices = products.map(product => product.unitPrice).sort();

	const half = Math.floor(prices.length / 2);
	const median = prices.length % 2 ? prices[half] : (prices[half - 1] + prices[half]) / 2;
	return Number(median.toFixed(2));
}

module.exports = { getAveragePrice, getAverageUnitPrice, getMedianPrice, getMedianUnitPrice };
