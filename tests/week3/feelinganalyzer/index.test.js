const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

// Create virtual DOM
let virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const document = virtualPage.window.document;

// Mock fetch
virtualPage.window.fetch = async (url, options) => {
	if (!url.includes('localhost:3000') && !url.includes('127.0.0.1:3000')) {
		return fetch(url, options);
	}

	let mockedRes = {};

	if (options?.method === 'POST' && url.endsWith('/analyze')) {
		mockedRes = { result: true, score: sentiment.analyze(JSON.parse(options.body).message).score };
	}

	return Promise.resolve({
		json: () => Promise.resolve(mockedRes),
	});
};

// Insert script.js into virtual DOM
const script = document.createElement('script');
script.textContent = js;
document.body.appendChild(script);

it('Positive message', async () => {
	const message = 'I love JavaScript!';

	const event = document.createEvent('Events');
	event.initEvent('input', true, true);

	const element = document.querySelector('#message');
	element.value = message;
	element.dispatchEvent(event);

	// Wait 100ms for the message to be analyzed
	await new Promise((r) => setTimeout(r, 100));

	const score = sentiment.analyze(message).score;
	expect(document.querySelector('#score').textContent).toContain(String(score));
	expect(document.querySelector('#sentiment').src).toContain('happy.png');
});

it('Negative message', async () => {
	const message = 'I hate JavaScript!';

	const event = document.createEvent('Events');
	event.initEvent('input', true, true);

	const element = document.querySelector('#message');
	element.value = message;
	element.dispatchEvent(event);

	// Wait 100ms for the message to be analyzed
	await new Promise((r) => setTimeout(r, 100));

	const score = sentiment.analyze(message).score;
	expect(document.querySelector('#score').textContent).toContain(String(score));
	expect(document.querySelector('#sentiment').src).toContain('angry.png');
});

it('Neutral message', async () => {
	const message = 'I am JavaScript.';

	const event = document.createEvent('Events');
	event.initEvent('input', true, true);

	const element = document.querySelector('#message');
	element.value = message;
	element.dispatchEvent(event);

	// Wait 100ms for the message to be analyzed
	await new Promise((r) => setTimeout(r, 100));

	const score = sentiment.analyze(message).score;
	expect(document.querySelector('#score').textContent).toContain(String(score));
	expect(document.querySelector('#sentiment').src).toContain('neutral.png');
});

it('Empty input', async () => {
	const event = document.createEvent('Events');
	event.initEvent('input', true, true);

	const element = document.querySelector('#message');
	element.value = '';
	element.dispatchEvent(event);

	// Wait 100ms for the message to be analyzed
	await new Promise((r) => setTimeout(r, 100));

	expect(document.querySelector('#score').textContent).toContain(String(0));
	expect(document.querySelector('#sentiment').src).toContain('question-mark.png');
});
