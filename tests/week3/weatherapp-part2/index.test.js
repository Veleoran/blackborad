const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { expect, it } = require('@jest/globals');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

// Create virtual DOM
let virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const document = virtualPage.window.document;

// Mock fetch
const initialDummyWeatherData = [
	{ cityName: 'City1_TEST', description: 'rainy', tempMin: '5.2', tempMax: '25.9' },
	{ cityName: 'City2_TEST', description: 'sunny', tempMin: '32.32', tempMax: '42.8' },
];
const dummyWeatherDataToAdd = [
	{ cityName: 'City3_TEST', description: 'cloudy', tempMin: '8', tempMax: '20.02' },
	{ cityName: 'City4_TEST', description: 'rainy', tempMin: '14.23', tempMax: '21.8' },
];

virtualPage.window.fetch = (url, options) => {
	let res = {};

	if (!options && url.endsWith('/weather')) {
		res = { weather: initialDummyWeatherData };
	} else if (options && options.method === 'POST') {
		res = { result: true, weather: dummyWeatherDataToAdd.find(e => e.cityName === JSON.parse(options.body).cityName) };
	} else if (options && options.method === 'DELETE') {
		res = { result: true, weather: initialDummyWeatherData };
	}

	return Promise.resolve({
		json: () => Promise.resolve(res),
	});
};

// Insert script.js into virtual DOM
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

it('Initial city list', () => {
	expect(document.querySelectorAll('.cityElement').length).toBe(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.weatherCityName').length).toBe(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.weatherDescription').length).toBe(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.weatherTempMin').length).toBe(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.weatherTempMax').length).toBe(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.deleteCityBtn').length).toBe(initialDummyWeatherData.length);

	// Check if each initial city is in the list
	for (let i = 0; i < initialDummyWeatherData.length; i++) {
		expect(document.querySelectorAll('.weatherCityName')[i].textContent).toContain(initialDummyWeatherData[i].cityName);
		expect(document.querySelectorAll('.weatherDescription')[i].textContent).toContain(initialDummyWeatherData[i].description);
		expect(document.querySelectorAll('.weatherTempMin')[i].textContent).toContain(initialDummyWeatherData[i].tempMin);
		expect(document.querySelectorAll('.weatherTempMax')[i].textContent).toContain(initialDummyWeatherData[i].tempMax);
	}
});

it('Adds a new city', async () => {
	document.querySelector('#cityNameInput').value = 'City3_TEST';

	const event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.querySelector('#addCityBtn').dispatchEvent(event);

	// Wait 500ms for the new city to be added
	await new Promise((r) => setTimeout(r, 500));

	const expectedNbCityAfterAdd = initialDummyWeatherData.length + 1;
	expect(document.querySelectorAll('.cityElement').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherCityName').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherDescription').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherTempMin').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherTempMax').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.deleteCityBtn').length).toBe(expectedNbCityAfterAdd);

	// Check last city name to be the one added
	expect(document.querySelectorAll('.weatherCityName')[expectedNbCityAfterAdd - 1].textContent).toContain('City3_TEST');
});

it('Deletes a city', async () => {
	document.querySelector('#cityNameInput').value = 'City4_TEST';

	const event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.querySelector('#addCityBtn').dispatchEvent(event);

	// Wait 500ms for the new city to be added
	await new Promise((r) => setTimeout(r, 500));

	const expectedNbCityAfterAdd = initialDummyWeatherData.length + 2;
	expect(document.querySelectorAll('.cityElement').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherCityName').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherDescription').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherTempMin').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherTempMax').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.deleteCityBtn').length).toBe(expectedNbCityAfterAdd);
	expect(document.querySelectorAll('.weatherCityName')[expectedNbCityAfterAdd - 1].textContent).toContain('City4_TEST');

	// Click on last city delete button
	document.querySelectorAll('.deleteCityBtn')[expectedNbCityAfterAdd - 1].dispatchEvent(event);

	// Wait 500ms for the new city to be deleted
	await new Promise((r) => setTimeout(r, 500));

	const expectedNbCityAfterDelete = initialDummyWeatherData.length + 1;
	expect(document.querySelectorAll('.cityElement').length).toBe(expectedNbCityAfterDelete);
	expect(document.querySelectorAll('.weatherCityName').length).toBe(expectedNbCityAfterDelete);
	expect(document.querySelectorAll('.weatherDescription').length).toBe(expectedNbCityAfterDelete);
	expect(document.querySelectorAll('.weatherTempMin').length).toBe(expectedNbCityAfterDelete);
	expect(document.querySelectorAll('.weatherTempMax').length).toBe(expectedNbCityAfterDelete);
	expect(document.querySelectorAll('.deleteCityBtn').length).toBe(expectedNbCityAfterDelete);

	// Check if previously added city is deleted
	for (let i = 0; i < expectedNbCityAfterDelete; i++) {
		expect(document.querySelectorAll('.weatherCityName')[i].textContent).not.toContain('City4_TEST');
	}
});
