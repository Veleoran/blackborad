const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const { BACKEND_URL, FRONTEND_URL } = require('./urls');

it('BONUS - Backend deployment', async () => {
	const res = await fetch(BACKEND_URL + '/weather');
	const data = await res.json();

	expect(res.status).toBe(200);
	expect(data).toHaveProperty('currentPosWeather');
	expect(data.currentPosWeather).toHaveProperty('cityName', expect.any(String));
	expect(data.currentPosWeather).toHaveProperty('description', expect.any(String));
	expect(data.currentPosWeather).toHaveProperty('tempMin', expect.any(Number));
	expect(data.currentPosWeather).toHaveProperty('tempMax', expect.any(Number));
});

it('BONUS - Frontend deployment', async () => {
	const res = await fetch(FRONTEND_URL);
	const res2 = await fetch(FRONTEND_URL + '/script.js');
	const html = await res.text();
	const js = await res2.text();

	expect(res.status).toBe(200);
	expect(res2.status).toBe(200);

	// Create virtual DOM
	let virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
	const document = virtualPage.window.document;

	// Mock fetch
	virtualPage.window.fetch = fetch;

	// Insert script.js into virtual DOM
	const script = document.createElement('script');
	script.textContent = js;
	document.body.appendChild(script);

	// Wait 2s for the data to be loaded
	await new Promise((r) => setTimeout(r, 2000));

	expect(document.querySelector('#currentPosName').textContent).toEqual(expect.any(String));
	expect(document.querySelector('#currentPosDescription').textContent).toEqual(expect.any(String));
	expect(document.querySelector('#currentPosTempMin').textContent).toEqual(expect.any(String));
	expect(document.querySelector('#currentPosTempMax').textContent).toEqual(expect.any(String));
});
