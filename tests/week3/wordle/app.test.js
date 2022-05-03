const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

function getRandomWord(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = '';

	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;
}

it('GET /games/new', async () => {
	const res = await request(app).get('/game/new');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.gameId).toEqual(expect.any(String));
	expect(res.body.wordLength).toBeGreaterThanOrEqual(1);
});

it('GET /games/guess/:gameId/:word', async () => {
	const res = await request(app).get('/game/new');
	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.gameId).toEqual(expect.any(String));
	expect(res.body.wordLength).toBeGreaterThanOrEqual(1);

	const res2 = await request(app).get(`/game/guess/${res.body.gameId}/${getRandomWord(res.body.wordLength)}`);
	expect(res2.statusCode).toBe(200);
	expect(res2.body.result).toBe(true);
	expect(res2.body.guessResult).toEqual(expect.any(Array));
	expect(res2.body.guessResult.length).toBe(res.body.wordLength);
});

it('GET /games/solution/:gameId', async () => {
	const res = await request(app).get('/game/new');
	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.gameId).toEqual(expect.any(String));
	expect(res.body.wordLength).toBeGreaterThanOrEqual(1);

	const res2 = await request(app).get(`/game/solution/${res.body.gameId}`);
	expect(res2.statusCode).toBe(200);
	expect(res2.body.result).toBe(true);
	expect(res2.body.word).toEqual(expect.any(String));
	expect(res2.body.word.length).toBe(res.body.wordLength);
});

afterAll(() => {
	mongoose.connection.close();
});
