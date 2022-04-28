const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

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
	expect(document.querySelectorAll('.city').length).toBeGreaterThanOrEqual(initialDummyWeatherData.length);
	expect(document.querySelectorAll('.name').length).toBeGreaterThanOrEqual(initialDummyWeatherData.length);

	const cityListFromDom = [...document.querySelectorAll('.name')].map(e => e.textContent.toLowerCase());

	initialDummyWeatherData.forEach(e => {
		expect(cityListFromDom).toEqual(expect.arrayContaining([
			expect.stringMatching(new RegExp(e.cityName, 'i')),
		]));
	});
});

it('Adds a new city', async () => {
	const newCity = 'City3_TEST';;
	document.querySelector('#cityNameInput').value = newCity;

	const event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.querySelector('#addCity').dispatchEvent(event);

	// Wait 100ms for the new city to be added
	await new Promise((r) => setTimeout(r, 100));

	const nbCity = document.querySelectorAll('.name').length;
	const nbName = document.querySelectorAll('.city').length;
	const expectedNbCityAndName = initialDummyWeatherData.length + 1;
	expect(nbCity).toBe(nbName);
	expect(nbCity).toBeGreaterThanOrEqual(expectedNbCityAndName);
	expect(nbName).toBeGreaterThanOrEqual(expectedNbCityAndName);
	expect(document.querySelectorAll('.name')[nbName - 1].textContent).toContain(newCity);
});

it('Deletes a city', async () => {
	const newCity = 'City4_TEST';
	document.querySelector('#cityNameInput').value = newCity;

	const event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.querySelector('#addCity').dispatchEvent(event);

	// Wait 100ms for the new city to be added
	await new Promise((r) => setTimeout(r, 100));

	const nbCity = document.querySelectorAll('.name').length;
	const nbName = document.querySelectorAll('.city').length;
	const expectedNbCityAndName = initialDummyWeatherData.length + 2;
	expect(nbCity).toBe(nbName);
	expect(nbCity).toBeGreaterThanOrEqual(expectedNbCityAndName);
	expect(nbName).toBeGreaterThanOrEqual(expectedNbCityAndName);
	expect(document.querySelectorAll('.name')[nbName - 1].textContent).toContain(newCity);

	// Click on last city delete button (if there is one)
	expect(document.querySelectorAll('.deleteCity').length).toBe(nbCity);
	document.querySelectorAll('.deleteCity')[nbCity - 1].dispatchEvent(event);

	// Wait 100ms for the city to be deleted
	await new Promise((r) => setTimeout(r, 100));

	const nbCityAfterDelete = document.querySelectorAll('.name').length;
	const nbNameAfterDelete = document.querySelectorAll('.city').length;
	expect(nbCityAfterDelete).toBe(nbCity - 1);
	expect(nbNameAfterDelete).toBe(nbName - 1);

	// Check if city is deleted
	for (let i = 0; i < nbNameAfterDelete; i++) {
		expect(document.querySelectorAll('.name')[i].textContent).not.toContain(newCity);
	}
});
