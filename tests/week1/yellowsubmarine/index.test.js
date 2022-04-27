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

// Header
it('Header contains image', () => {
  expect(document.querySelector('#header')).toBeTruthy();
  const elements = document.querySelector('#header').children;
  let elementsArray = [];
  let imageSrc = '';
  for (const e of elements) {
    elementsArray.push(e.tagName);
    if (e.tagName === 'IMG') {
      imageSrc = e.src;
    }
  }

  expect(imageSrc).toBe('images/beatles-header.jpg');
  expect(elementsArray.includes('IMG')).toBe(true);
});

// Singer container
it('Number of singer_container and children', () => {
  expect(document.querySelectorAll('.singer_container').length).toBe(4);
  const elements = document.querySelector('.singer_container').children;
  let elementsArray = [];
  for (const e of elements) {
    elementsArray.push(e.tagName);
  }

  expect(elementsArray.includes('P')).toBe(true);
  expect(elementsArray.includes('IMG')).toBe(true);
});

it('Singer container has flexbox', () => {
  const selector = getSelector('.singer_container');
  expect(selector.style.display).toBe('flex');
  expect(selector.style).toEqual(expect.objectContaining({ 'flex-direction': 'column' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'align-items': 'center' }));
});
