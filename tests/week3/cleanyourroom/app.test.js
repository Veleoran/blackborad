const request = require('supertest');
const app = require('./app');
const { checkModeratorPassword, checkAdminPassword } = require('./modules/checkPasswords');

it('GET /home', async () => {
	const res = await request(app).get('/home');

	expect(res.statusCode).toBe(200);
	expect(res.body.message).toBe('Welcome to /home');
});

it('GET /about', async () => {
	const res = await request(app).get('/about');

	expect(res.statusCode).toBe(200);
	expect(res.body.message).toBe('Welcome to /about');
});

it('POST /moderator/login - Valid password', async () => {
	const res = await request(app).post('/moderator/login').send({ password: 'modpwd123' });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
});

it('POST /moderator/login - Invalid password', async () => {
	const res = await request(app).post('/moderator/login').send({ password: null });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('Invalid password for moderator');
});

it('POST /moderator/secretaction - Valid password', async () => {
	const res = await request(app).post('/moderator/secretaction').send({ password: 'modpwd123' });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
});

it('POST /moderator/secretaction - Invalid password', async () => {
	const res = await request(app).post('/moderator/secretaction').send({ password: null });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('Invalid password for moderator');
});

it('POST /admin/login - Valid password', async () => {
	const res = await request(app).post('/admin/login').send({ password: 'adminazerty123' });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
});

it('POST /admin/login - Invalid password', async () => {
	const res = await request(app).post('/admin/login').send({ password: null });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('Invalid password for admin');
});

it('POST /admin/supersecretaction - Valid password', async () => {
	const res = await request(app).post('/admin/supersecretaction').send({ password: 'adminazerty123' });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
});

it('POST /admin/supersecretaction - Invalid password', async () => {
	const res = await request(app).post('/admin/supersecretaction').send({ password: null });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('Invalid password for admin');
});

it('checkModeratorPassword module - Valid password', () => {
	expect(checkModeratorPassword('modpwd123')).toBe(true);
});

it('checkModeratorPassword module - Invalid password', () => {
	expect(checkModeratorPassword('invalidpwd')).toBe(false);
});

it('checkAdminPassword module - Valid password', () => {
	expect(checkAdminPassword('adminazerty123')).toBe(true);
});

it('checkAdminPassword module - Invalid password', () => {
	expect(checkAdminPassword('invalidpwd')).toBe(false);
});
