const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');
const City = require('./models/cities');

const newCity = 'Las Vegas';

beforeEach(async () => {
	await City.deleteOne({ cityName: newCity });
});

it('Cities schema & model', () => {
	expect(City).toBeDefined();

	const newFakeCity = new City({
		cityName: 'City1_TEST',
		description: 'rainy',
		tempMin: 5.2,
		tempMax: 25.9,
	});

	expect(newFakeCity).toHaveProperty('_id');
	expect(newFakeCity).toHaveProperty('cityName', 'City1_TEST');
	expect(newFakeCity).toHaveProperty('description', 'rainy');
	expect(newFakeCity).toHaveProperty('tempMin', 5.2);
	expect(newFakeCity).toHaveProperty('tempMax', 25.9);
});

it('POST /weather - New city', async () => {
	const res = await request(app).post('/weather').send({ cityName: newCity });

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body).toHaveProperty('weather');
	expect(res.body.weather).toHaveProperty('cityName', newCity);
	expect(res.body.weather).toHaveProperty('description', expect.any(String));
	expect(res.body.weather).toHaveProperty('tempMin', expect.any(Number));
	expect(res.body.weather).toHaveProperty('tempMax', expect.any(Number));
});

it('POST /weather - Duplicate city', async () => {
	const res = await request(app).post('/weather').send({ cityName: newCity });
	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body).toHaveProperty('weather');
	expect(res.body.weather).toHaveProperty('cityName', newCity);
	expect(res.body.weather).toHaveProperty('description', expect.any(String));
	expect(res.body.weather).toHaveProperty('tempMin', expect.any(Number));
	expect(res.body.weather).toHaveProperty('tempMax', expect.any(Number));

	const res2 = await request(app).post('/weather').send({ cityName: newCity });
	expect(res2.statusCode).toBe(200);
	expect(res2.body.result).toBe(false);
	expect(res2.body.error).toBe('City already saved');
});

it('GET /weather', async () => {
	const newCity2 = 'New York';
	await City.deleteOne({ cityName: newCity2 });

	await request(app).post('/weather').send({ cityName: newCity });
	await request(app).post('/weather').send({ cityName: newCity2 });
	const res = await request(app).get('/weather');

	expect(res.statusCode).toBe(200);
	expect(res.body.weather).toEqual(expect.arrayContaining([
		expect.objectContaining({ cityName: newCity, description: expect.any(String), tempMin: expect.any(Number), tempMax: expect.any(Number) }),
		expect.objectContaining({ cityName: newCity2, description: expect.any(String), tempMin: expect.any(Number), tempMax: expect.any(Number) }),
	]));
});

it('GET /weather/:cityName - Existing city', async () => {
	await request(app).post('/weather').send({ cityName: newCity });
	const res = await request(app).get(`/weather/${newCity}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body).toHaveProperty('weather');
	expect(res.body.weather).toHaveProperty('cityName', newCity);
	expect(res.body.weather).toHaveProperty('description', expect.any(String));
	expect(res.body.weather).toHaveProperty('tempMin', expect.any(Number));
	expect(res.body.weather).toHaveProperty('tempMax', expect.any(Number));
});

it('GET /weather/:cityName - Not existing city', async () => {
	const res = await request(app).get('/weather/CityNotExisting_TEST');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('City not found');
});

it('DELETE /weather/:cityName - Existing city', async () => {
	await request(app).post('/weather').send({ cityName: newCity });
	const res = await request(app).delete(`/weather/${newCity}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.weather).toEqual(expect.not.arrayContaining([
		expect.objectContaining({ cityName: newCity}),
	]));
});

it('DELETE /weather/:cityName - Not existing city', async () => {
	const res = await request(app).delete('/weather/CityNotExisting2_TEST');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
	expect(res.body.error).toBe('City not found');
});

afterAll(() => {
	mongoose.connection.close();
});
