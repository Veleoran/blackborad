const { getProductById, getProductsByBrand, getProductByBatchId } = require('./products');
const { getRecalledProductsByBrand, getRecalledProductsByTimestamp } = require('./recalls');
const { getAveragePrice, getAverageUnitPrice, getMedianPrice, getMedianUnitPrice } = require('./prices');
const { getStock, getStockByTimestamps } = require('./stocks');

// products.js
it('Get product by id', () => {
	expect(getProductById(1737)).toEqual({
		id: 1737,
		brand: 'Amora',
		name: 'Mayonnaise',
		price: 2.85,
		unitPrice: 7.13,
		unit: 'killogram',
		batches: [
			{
				id: 1370005607,
				quantity: 5000,
				shippingDate: '2042-10-05',
				expirationDate: '2043-10-05',
				recall: false
			}
		]
	});
});

it('Get products by brand', () => {
	expect(getProductsByBrand('Alvalle')).toEqual([
		{
			id: 4489,
			brand: 'Alvalle',
			name: 'Gazpacho',
			price: 2.4,
			unitPrice: 4.8,
			unit: 'liter',
			batches: [
				{ id: 4431007122, quantity: 12000, shippingDate: '2042-01-02', expirationDate: '2042-03-02', recall: false },
				{ id: 4431007123, quantity: 22000, shippingDate: '2042-01-10', expirationDate: '2042-03-10', recall: false }
			]
		},
		{
			id: 4800,
			brand: 'Alvalle',
			name: 'Green gazpacho',
			price: 3.95,
			unitPrice: 3.95,
			unit: 'liter',
			batches: [
				{ id: 4881007100, quantity: 6000, shippingDate: '2042-01-02', expirationDate: '2042-03-02', recall: true },
				{ id: 4881007100, quantity: 6000, shippingDate: '2042-01-03', expirationDate: '2042-03-03', recall: true },
				{ id: 4881007101, quantity: 11000, shippingDate: '2042-01-10', expirationDate: '2042-03-10', recall: false },
			]
		}
	]);
});

it('Get product by batch id', () => {
	expect(getProductByBatchId(1420005608)).toEqual({
		id: 1490,
		brand: 'Amora',
		name: 'Ketchup',
		price: 2.25,
		unitPrice: 3.91,
		unit: 'killogram',
		batches: [
			{
				id: 1420005607,
				quantity: 2000,
				shippingDate: '2042-07-05',
				expirationDate: '2043-07-05',
				recall: true
			},
			{
				id: 1420005608,
				quantity: 3000,
				shippingDate: '2042-07-25',
				expirationDate: '2043-07-25',
				recall: true
			},
			{
				id: 1420005609,
				quantity: 2000,
				shippingDate: '2042-10-02',
				expirationDate: '2043-10-02',
				recall: true
			}
		]
	});
});

// recalls.js
it('Get recalled products by brand', () => {
	expect(getRecalledProductsByBrand('Alvalle')).toEqual([4800]);
});

it('Get recalled products by timestamp', () => {
	const timestamp = new Date('2042-07-25').getTime();
	expect(getRecalledProductsByTimestamp(timestamp)).toEqual([2022, 2044]);
});

// prices.js
it('Get average price', () => {
	expect(getAveragePrice('Lipton')).toBe(1.61);
});

it('Get average unit price', () => {
	expect(getAverageUnitPrice('Lipton')).toBe(1.28);
});

it('Get median price', () => {
	expect(getMedianPrice('Amora')).toBe(1.95);
});

it('Get median unit price', () => {
	expect(getMedianUnitPrice('Amora')).toBe(5.62);
});

// stocks.js
it('Get not recalled stock', () => {
	expect(getStock(1311, false)).toBe(54000);
});

it('Get recalled stock', () => {
	expect(getStock(1490, true)).toBe(7000);
});

it('Get stock by timestamps', () => {
	const timestampStart = new Date('2043-07-05').getTime();
	const timestampEnd = new Date('2043-10-01').getTime();
	expect(getStockByTimestamps(1490, timestampStart, timestampEnd)).toBe(5000);
});
