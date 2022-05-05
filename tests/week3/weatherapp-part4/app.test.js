const request = require('supertest');
const mongoose = require('mongoose');
const geoip = require('geoip-lite');
const app = require('./app');

beforeAll(() => {
	jest.spyOn(geoip, 'lookup').mockReturnValue({
		range: [3113409536, 3113410559],
		country: 'FR',
		region: '',
		eu: '1',
		timezone: 'Europe/Paris',
		city: '',
		ll: [48.89286554660495, 2.2975436153402717],
		metro: 0,
		area: 500
	});
});

it('GET /weather with geoloc', async () => {
	const fakeIP = '255.255.255.255';
	const res = await request(app).get('/weather').set('x-real-ip', fakeIP);

	expect(res.statusCode).toBe(200);
	expect(res.body).toHaveProperty('currentPosWeather');
	expect(res.body.currentPosWeather).toHaveProperty('cityName', expect.any(String));
	expect(res.body.currentPosWeather).toHaveProperty('description', expect.any(String));
	expect(res.body.currentPosWeather).toHaveProperty('tempMin', expect.any(Number));
	expect(res.body.currentPosWeather).toHaveProperty('tempMax', expect.any(Number));
	expect(geoip.lookup.mock.lastCall[0]).toBe(fakeIP);
});

afterAll(() => {
	mongoose.connection.close();
});
