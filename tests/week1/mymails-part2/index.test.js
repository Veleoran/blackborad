const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

// Create virtual DOM
const virtualPageHTML = new JSDOM(html);
const virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const document = virtualPageHTML.window.document;
const documentJS = virtualPage.window.document;

// Insert script.js into virtual DOM
const script = documentJS.createElement('script');
script.textContent = js;
documentJS.body.appendChild(script);

it('New message created via DOM', () => {
  const h6Length = document.querySelectorAll('h6').length;
  const pLength = document.querySelectorAll('p').length;
  const imgLength = document.querySelectorAll('img').length;
  const rowLength = document.querySelectorAll('.row').length;

  expect(documentJS.querySelectorAll('h6').length).toBe(h6Length + 1);
  expect(documentJS.querySelectorAll('p').length).toBe(pLength + 1);
  expect(documentJS.querySelectorAll('img').length).toBe(imgLength + 1);
  expect(documentJS.querySelectorAll('.row').length).toBe(rowLength + 1);
});

it('Counter message', () => {
  const rowLength = document.querySelectorAll('.row').length;
  expect(documentJS.querySelector('#count').textContent).toBe(JSON.stringify(rowLength + 1));
});

it('Today date in footer', () => {
  const elements = documentJS.querySelector('#footer').children;
  let elementsArray = [];
  for (const e of elements) {
    if (e.tagName === 'SPAN') {
      elementsArray.push(e.tagName);
    }
  }

  expect(elementsArray.length).toBeGreaterThan(1);
  expect(documentJS.querySelector('#date').tagName).toBe('SPAN');

  let year = new Date().getUTCFullYear();
  let month;
  let day;

  if (new Date().getMonth() < 9) {
    month = '0' + (new Date().getMonth() + 1);
  } else {
    month = new Date().getMonth() + 1;
  }

  if (new Date().getDate() < 9) {
    day = '0' + new Date().getDate();
  } else {
    day = new Date().getDate();
  }
  const date = year + '-' + month + '-' + day;

  expect(new Date(documentJS.querySelector('#date').textContent).getDate() === new Date().getDate() || Date(documentJS.querySelector('#date').textContent) === date).toBeTruthy();
});
