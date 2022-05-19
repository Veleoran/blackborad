const request = require('supertest');
const app = require('./app');

it('GET /products/byId/:id', async () => {
	const res = await request(app).get('/products/byId/1737');

	expect(res.statusCode).toBe(200);
	expect(res.body.product).toEqual({
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

it('GET /products/byBatchId/:id', async () => {
	const res = await request(app).get('/products/byBatchId/1420005608');

	expect(res.statusCode).toBe(200);
	expect(res.body.product).toEqual({
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

it('GET /products/byBrand/:brand', async () => {
	const res = await request(app).get('/products/byBrand/Alvalle');

	expect(res.statusCode).toBe(200);
	expect(res.body.products).toEqual([
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
