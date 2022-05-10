const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

// Create virtual DOM
const virtualPage = new JSDOM(html);
const document = virtualPage.window.document;
document.head.innerHTML = `<style>${css}</style>`;

function getSelector(selector) {
  const cssRules = document.styleSheets.item(0).cssRules;
  const result = { isExist: false, style: null };

  for (let i = 0; i < cssRules.length; i++) {
    if (cssRules[i].selectorText == selector) {
      result.isExist = true;
      result.style = cssRules[i].style;
    }
  }
  return result;
}

it('Header composition', () => {
  expect(document.querySelector('#header')).toBeTruthy();

  const elements = document.querySelector('#header').children;
  const elementsArray = [];
  let imageSrc = '';

  for (const e of elements) {
    elementsArray.push(e.tagName);

    if (e.tagName === 'IMG') {
      imageSrc = e.src;
    }
  }

  expect(getSelector('#header').style).toEqual(expect.objectContaining({ 'background-image': "url('../assets/background.jpg')" }));
  expect(imageSrc).toBe('./assets/logo.png');
  expect(elementsArray.includes('IMG')).toBe(true);
});

it('Container composition', () => {
  expect(document.querySelector('#container')).toBeTruthy();

  const elements = document.querySelector('#container').children;
  const row = document.querySelector('.row').children;
  const containerElements = [];
  const rowElements = [];

  for (const e of elements) {
    if (e.className === 'row') {
      containerElements.push(e);
    }
  }
  for (const e of row) {
    rowElements.push(e.tagName);
  }

  expect(rowElements.includes('IMG')).toBe(true);
  expect(rowElements.includes('DIV')).toBe(true);
  expect(containerElements.length).toBe(3);
});
