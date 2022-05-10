const request = require('supertest');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const app = require('./app');

it('POST /analyze - Valid message', async () => {
	const message = 'I love JavaScript!';
	const res = await request(app).post('/analyze').send({ message });

	expect(res.statusCode).toBe(200);
	expect(res.body.score).toBe(sentiment.analyze(message).score);
});

it('POST /analyze - Invalid message', async () => {
	const res = await request(app).post('/analyze');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
});
