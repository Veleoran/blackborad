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
const dummyCurrentPosWeatherData = {
	cityName: 'City5_TEST',
	description: 'cloudy',
	tempMin: '5.5',
	tempMax: '50.01',
};

virtualPage.window.fetch = (url, options) => {
	let mockedRes = {};

	if (!options && url.endsWith('/weather')) {
		mockedRes = { weather: initialDummyWeatherData, currentPosWeather: dummyCurrentPosWeatherData };
	} else if (options && options.method === 'POST' && url.endsWith('/weather')) {
		mockedRes = { result: true, weather: dummyWeatherDataToAdd.find(e => e.cityName === JSON.parse(options.body).cityName) };
	} else if (options && options.method === 'DELETE' && url.includes('/weather')) {
		mockedRes = { result: true, weather: initialDummyWeatherData };
	}

	return Promise.resolve({
		json: () => Promise.resolve(mockedRes),
	});
};

// Insert script.js into virtual DOM
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

it('Current position weather', async () => {
	expect(document.querySelector('#currentPosName').textContent).toContain(dummyCurrentPosWeatherData.cityName);
	expect(document.querySelector('#currentPosDescription').textContent).toContain(dummyCurrentPosWeatherData.description);
	expect(document.querySelector('#currentPosTempMin').textContent).toContain(dummyCurrentPosWeatherData.tempMin);
	expect(document.querySelector('#currentPosTempMax').textContent).toContain(dummyCurrentPosWeatherData.tempMax);
});
