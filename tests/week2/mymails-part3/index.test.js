const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

// Create virtual DOM
const virtualPage = new JSDOM(html, { runScripts: 'dangerously' });
const documentJS = virtualPage.window.document;

// Insert script.js into virtual DOM
const script = documentJS.createElement('script');
script.textContent = js;
documentJS.body.appendChild(script);

it('Retrieves message in add-message input', () => {
  const newMessage = 'Hello world!'
  documentJS.querySelector('#add-message').value = newMessage;
  documentJS.querySelector('#btn-add').click();

  const nbMessage = documentJS.querySelectorAll('.row').length;
  expect(documentJS.querySelectorAll('p')[nbMessage - 1].textContent).toContain(newMessage);
});

it('Add message button + counter update', () => {
  const nbMessageBeforeAdd = documentJS.querySelectorAll('.row').length;
  documentJS.querySelector('#btn-add').click();

  expect(documentJS.querySelectorAll('.row').length).toBe(nbMessageBeforeAdd + 1);
  expect(documentJS.querySelector('#count').textContent).toContain(String(nbMessageBeforeAdd + 1));
});

it('Search message', () => {
  documentJS.querySelector('#search-message').value = 'Alexandra';
  const textToCompare = documentJS.querySelector('#search-message').value.toLowerCase();
  documentJS.querySelector('#btn-search').click();

  for (let i = 0; i < documentJS.querySelectorAll('h6').length; i++) {
    if (documentJS.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false) {
      const textToShow = documentJS.querySelectorAll('.row')[i];
      expect(textToShow.style.display).toBe('none');
    } else {
      const textToHide = documentJS.querySelectorAll('.row')[i];
      expect(textToHide.style.display).not.toBe('none');
    }
  }
});

it('Delete message button + update counter', () => {
  const elements = documentJS.querySelectorAll('.delete');
  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
  }

  expect(documentJS.querySelectorAll('.delete').length).toBe(0);
  expect(Number(documentJS.querySelector('#count').textContent)).toBe(0);
});
