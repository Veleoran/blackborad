const request = require('supertest');
const app = require('./app');


it('POST /weather - New city', async () => {
	const newCity = { city: 'City1_TEST', description: 'rainy', tempMin: 5.2, tempMax: 25.9 };
	const res = await request(app).post('/weather').send(newCity);

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.weather).toEqual(expect.arrayContaining([newCity]));
});

it('POST /weather - Duplicate city', async () => {
	const newCity = { city: 'City2_TEST', description: 'sunny', tempMin: 32.32, tempMax: 42.8 };

	const res = await request(app).post('/weather').send(newCity);
	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.weather).toEqual(expect.arrayContaining([newCity]));

	const res2 = await request(app).post('/weather').send(newCity);
	expect(res2.statusCode).toBe(200);
	expect(res2.body.result).toBe(false);
});

it('GET /weather', async () => {
	const newCity = { city: 'City3_TEST', description: 'sunny', tempMin: 32.32, tempMax: 42.8 };
	const newCity2 = { city: 'City4_TEST', description: 'rainy', tempMin: 5.2, tempMax: 25.9 };

	await request(app).post('/weather').send(newCity);
	await request(app).post('/weather').send(newCity2);
	const res = await request(app).get('/weather');

	expect(res.statusCode).toBe(200);
	expect(res.body.weather).toEqual(expect.arrayContaining([newCity, newCity2]));
});

it('GET /weather/:city - Existing city', async () => {
	const newCity = { city: 'City5_TEST', description: 'rainy', tempMin: 5.2, tempMax: 25.9 };

	await request(app).post('/weather').send(newCity);
	const res = await request(app).get(`/weather/${newCity.city}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.weather).toEqual(newCity);
});

it('GET /weather/:city - Not existing city', async () => {
	const res = await request(app).get('/weather/CityNotExisting_TEST');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
});

it('DELETE /weather/:city - Existing city', async () => {
	const newCity = { city: 'City6_TEST', description: 'sunny', tempMin: 32.32, tempMax: 42.8 };

	await request(app).post('/weather').send(newCity);
	const res = await request(app).delete(`/weather/${newCity.city}`);

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(true);
	expect(res.body.weather).toEqual(expect.not.arrayContaining([newCity]));
});

it('DELETE /weather/:city - Not existing city', async () => {
	const res = await request(app).delete('/weather/CityNotExisting2_TEST');

	expect(res.statusCode).toBe(200);
	expect(res.body.result).toBe(false);
});
