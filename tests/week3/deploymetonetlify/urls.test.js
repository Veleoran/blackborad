const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const { FRONTEND_URL } = require('./urls');

it('Frontend deployment', async () => {
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
	virtualPage.window.fetch = (url, options) => {
		let mockedRes = {};

		if (!options && url.endsWith('/year')) {
			mockedRes = { year: 'FAKE_YEAR_FOR_TEST' };
		}

		return Promise.resolve({
			json: () => Promise.resolve(mockedRes),
		});
	};

	// Insert script.js into virtual DOM
	const script = document.createElement('script');
	script.textContent = js;
	document.body.appendChild(script);

	// Wait 2s for the date to be loaded
	await new Promise((r) => setTimeout(r, 2000));

	expect(document.querySelector('#year').textContent.toUpperCase()).toContain('FAKE_YEAR_FOR_TEST');
});
