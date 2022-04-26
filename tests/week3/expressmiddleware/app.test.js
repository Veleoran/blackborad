const request = require('supertest');
const app = require('./app');

it('Requests with authorization', async () => {
	const res = await request(app).get('/message').set('Authorization', 'supersecretapikey');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.message).toBe('Hello world!');
});

it('Requests without authorization', async () => {
	const res = await request(app).get('/message');

	expect(res.statusCode).toBe(403);
	expect(res.body.result).toBe(false);
});
