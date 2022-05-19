const request = require('supertest');
const app = require('./app');

it('GET /recalls/byId/:id', async () => {
	const res = await request(app).get('/recalls/byBrand/Alvalle');

	expect(res.statusCode).toBe(200);
	expect(res.body.products).toEqual([4800]);
});

it('GET /recalls/byTimestamp/:timestamp', async () => {
	const timestamp = new Date('2042-07-25').getTime();
	const res = await request(app).get(`/recalls/byTimestamp/${timestamp}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.products).toEqual([2022, 2044]);
});
