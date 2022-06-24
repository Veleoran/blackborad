const request = require('supertest');
const app = require('./app');

it('GET /prices/average/:brand ', async () => {
	const res = await request(app).get('/prices/average/Lipton');

	expect(res.statusCode).toBe(200);
	expect(res.body.average).toBe(1.61);
});

it('GET /prices/averageUnit/:brand ', async () => {
	const res = await request(app).get('/prices/averageUnit/Lipton');

	expect(res.statusCode).toBe(200);
	expect(res.body.average).toBe(1.28);
});

it('GET /prices/median/:brand ', async () => {
	const res = await request(app).get('/prices/median/Amora');

	expect(res.statusCode).toBe(200);
	expect(res.body.median).toBe(1.95);
});

it('GET /prices/medianUnit/:brand ', async () => {
	const res = await request(app).get('/prices/medianUnit/Amora');

	expect(res.statusCode).toBe(200);
	expect(res.body.median).toBe(5.62);
});
