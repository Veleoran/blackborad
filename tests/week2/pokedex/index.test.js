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

const pokemonNameList = [
	'arbok', 'arcanine', 'beedrill',
	'blastoise', 'bulbasaur', 'butterfree',
	'caterpie', 'charizard', 'charmander',
	'charmeleon', 'diglett', 'dugtrio',
	'ekans', 'fearow', 'golduck',
	'growlithe', 'ivysaur', 'kakuna',
	'mankey', 'meowth', 'metapod',
	'nidoran-f', 'nidorina', 'paras',
	'parasect', 'persian', 'pidgeot',
	'pidgeotto', 'pidgey', 'pikachu',
	'poliwag', 'primeape', 'psyduck',
	'raichu', 'raticate', 'rattata',
	'sandshrew', 'sandslash', 'spearow',
	'squirtle', 'venomoth', 'venonat',
	'venusaur', 'wartortle', 'weedle'
];

it('Initial pokemon list', async () => {
	// Wait 2s for the list to be updated
	await new Promise((r) => setTimeout(r, 2000));

	let pokemonListFromDom = [...document.querySelectorAll('.name')].map(li => li.textContent.toLowerCase());
	if (pokemonListFromDom[0] === 'clefairy') {
		pokemonListFromDom.splice(0, 1);
	}

	expect(pokemonListFromDom.length).toEqual(15);
	expect(pokemonNameList).toEqual(expect.arrayContaining(pokemonListFromDom));
});

it('Clicks next button (2 times)', async () => {
	const event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	document.querySelector('#next').dispatchEvent(event);
	document.querySelector('#next').dispatchEvent(event);

	// Wait 2s for the list to be updated
	await new Promise((r) => setTimeout(r, 2000));

	let pokemonListFromDom = [...document.querySelectorAll('.name')].map(li => li.textContent.toLowerCase());
	if (pokemonListFromDom[0] === 'clefairy') {
		pokemonListFromDom.splice(0, 1);
	}

	expect(pokemonListFromDom.length).toEqual(45);
	expect(pokemonListFromDom.sort()).toEqual(pokemonListFromDom);
});
