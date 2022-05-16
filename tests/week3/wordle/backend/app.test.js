const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

it('GET /games/new', async () => {
	const res = await request(app).get('/game/new');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.gameId).toEqual(expect.any(String));
	expect(res.body.word).toEqual(expect.any(String));
	expect(res.body.wordLength).toBeGreaterThanOrEqual(1);
});

afterAll(() => {
	mongoose.connection.close();
});
