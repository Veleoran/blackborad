const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

jest.useRealTimers();

// Create virtual DOM
let virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const document = virtualPage.window.document;

// Mock fetch
const randomWord = "FLOWER"
const letterPressed = "f";

virtualPage.window.fetch = (url, options) => {
	let mockedRes = {};

	if (!options && url.endsWith('/new')) {
		mockedRes = { result: true, gameId: "628247d80900e2c69e9f5b0b", word: randomWord };
	}

	return Promise.resolve({
		json: () => Promise.resolve(mockedRes),
	});
};

/* beforeAll(() => {
	const event = document.createEvent("KeyboardEvent")
	event.initKeyboardEvent("keydown", true, true, document.defaultView, letterPressed, letterPressed, false, false, false, false)
	let dispatch = document.dispatchEvent(event)
}); */

// Insert script.js into virtual DOM
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

it('Number of vertical and horizontal boxes depending on word', async () => {
	const rows = document.querySelectorAll(".letter-row")
	expect(rows.length).toBe(6);
	expect(rows[0].children.length).toBe(6);
});

it('When a letter is pressed', async () => {
	/* 	let event = new KeyboardEvent('keydown', { 'keyCode': 37 });
		document.dispatchEvent(event); */

	/* const event = document.createEvent("KeyboardEvent")
	event.initKeyboardEvent("keydown", true, true, document.defaultView, letterPressed, letterPressed, false, false, false, false);
	document.dispatchEvent(event) */
	const test = document.querySelectorAll(".letter-row")
	//expect(test[0].children[0].textContent).toBe('f');
});

it('New game button', async () => {
	document.querySelector('#newGame').click();
	expect(document.querySelector('#result').innerHTML).toBe("");
	expect(document.querySelector('#game-board').innerHTML).toBe("");
});