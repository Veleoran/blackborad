const request = require('supertest');
const app = require('./app');

it('GET /stocks', async () => {
	const res = await request(app).get('/stocks/byProductId/1311');

	expect(res.statusCode).toBe(200);
	expect(res.body.stocks).toBe(54500);
});

it('GET /byTimestamp', async () => {
	const start = new Date('2043-07-05').getTime();
	const end = new Date('2043-10-01').getTime();
	const res = await request(app).get(`/stocks/byTimestamp?productId=1490&start=${start}&end=${end}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.stocks).toBe(5000);
});
