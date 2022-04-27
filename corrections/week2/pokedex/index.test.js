const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

// Create virtual DOM
const virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const document = virtualPage.window.document;

// Mock fetch
virtualPage.window.fetch = fetch;

// Insert script.js into virtual DOM
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

it('Initial pokemon list', async () => {
	// Wait 1s for the list to be updated
	await new Promise((r) => setTimeout(r, 1000));

	const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15');
	const pokeData = await res.json();

	const pokeListFromApi = pokeData.results.map(pokemon => pokemon.name.toLowerCase());
	let pokeListFromDom = [...document.querySelectorAll('.name')].map(li => li.textContent.toLowerCase());

	if (pokeListFromDom[0] === 'clefairy') {
		pokeListFromDom.splice(0, 1);
	}

	expect(pokeListFromDom.sort()).toEqual(pokeListFromApi.sort());
});

// it('Clicks next button', async () => {
// 	const event = document.createEvent('MouseEvents');
// 	event.initMouseEvent('click');
// 	document.querySelector('#next').dispatchEvent(event);
// 	document.querySelector('#next').dispatchEvent(event);

// 	const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=60&limit=20');
// 	const pokeData = await res.json();

// 	const pokeListFromApi = pokeData.results.map(pokemon => pokemon.name);
// 	const pokeListFromDom = [...document.querySelectorAll('li')].map(li => li.textContent);

// 	expect(pokeListFromDom).toEqual(pokeListFromApi);
// });

// it('Clicks next and prev buttons', async () => {
// 	const event = document.createEvent('MouseEvents');
// 	event.initMouseEvent('click');
// 	document.querySelector('#next').dispatchEvent(event);
// 	document.querySelector('#next').dispatchEvent(event);
// 	document.querySelector('#next').dispatchEvent(event);
// 	document.querySelector('#next').dispatchEvent(event);
// 	document.querySelector('#prev').dispatchEvent(event);

// 	const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=80&limit=20');
// 	const pokeData = await res.json();

// 	const pokeListFromApi = pokeData.results.map(pokemon => pokemon.name);
// 	const pokeListFromDom = [...document.querySelectorAll('li')].map(li => li.textContent);

// 	expect(pokeListFromDom).toEqual(pokeListFromApi);
// });
