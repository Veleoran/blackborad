const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const htmlUikit = fs.readFileSync(path.resolve(__dirname, './uikit.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

// Create virtual DOM
const virtualPage = new JSDOM(html);
const document = virtualPage.window.document;
const virtualPageUikit = new JSDOM(htmlUikit);
const documentUikit = virtualPageUikit.window.document;
document.head.innerHTML = `<style>${css}</style>`;
documentUikit.head.innerHTML = `<style>${css}</style>`;

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

// Layout
it('Layout sections', () => {
  expect(document.querySelector('#container')).toBeTruthy();
  expect(document.querySelector('#header')).toBeTruthy();
  expect(document.querySelector('#footer')).toBeTruthy();
});

it('CSS grid in container + 12 columns & 12 rows', () => {
  const selector = getSelector('#container');
  expect(selector.style.display).toBe('grid');
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-template-rows': 'repeat(12, 1fr)' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-template-columns': 'repeat(12, 1fr)' }));
});

it('Header and footer grid-row and grid-column settings', () => {
  let selector = getSelector('#header');
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-row-start': '1' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-row-end': '2' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-column-start': '1' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-column-end': '13' }));

  selector = getSelector('#footer');
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-row-start': '12' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-row-end': '13' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-column-start': '1' }));
  expect(selector.style).toEqual(expect.objectContaining({ 'grid-column-end': '13' }));
});

// UI Kit
it('Typography section children element and style', () => {
  const elements = documentUikit.querySelector('#typography').children;
  let elementsArray = [];
  for (const e of elements) {
    elementsArray.push(e.tagName);
  }

  expect(elementsArray.includes('H1' && 'H6' && 'P')).toBe(true);
  expect(getSelector('h6').style).toEqual(expect.objectContaining({ 'font-size': '16px' }));
  expect(getSelector('p').style).toEqual(expect.objectContaining({ 'font-size': '14px' }));
  expect(getSelector('span').style).toEqual(expect.objectContaining({ 'font-size': '14px' }));
  expect(getSelector('h1').style).toEqual(expect.objectContaining({ 'font-size': '30px' }));
});

it('Images section children element and style', () => {
  const elements = documentUikit.querySelector('#images').children;
  let elementsArray = [];
  for (const e of elements) {
    if (e.tagName === 'IMG') {
      elementsArray.push(e.tagName);
    }
  }

  expect(elementsArray.length).toBe(2);
  expect(documentUikit.querySelector('.logo').src).toBe('images/logomymails.png');
  expect(documentUikit.querySelector('.avatar').src).toBe('images/avatar-1.jpg');
  expect(getSelector('.logo').style).toEqual(expect.objectContaining({ 'width': '80px' }));
  expect(getSelector('.avatar').style).toEqual(expect.objectContaining({ 'width': '60px', 'border-radius': '50%' }));
});

it('Buttons & inputs section children element and style', () => {
  const elements = documentUikit.querySelector('#buttonsandinputs').children;
  let elementsArray = [];
  for (const e of elements) {
    elementsArray.push(e.tagName);
  }

  expect(elementsArray.includes('BUTTON' && 'SPAN' && 'INPUT')).toBe(true);
  expect(getSelector('#btn-search').style).toEqual(expect.objectContaining({ 'background-color': '#1161F5' }));
  expect(getSelector('#btn-search:hover')).toBeTruthy();
  expect(getSelector('.delete')).toBeTruthy();
});

// index.html 
it('Elements creation in index.html', () => {
  expect(document.querySelectorAll('input').length).toBe(2);
  expect(document.querySelectorAll('button').length).toBe(2);
  expect(document.querySelectorAll('.row').length).toBe(5);
  expect(document.querySelector('#logo-container')).toBeTruthy();
  expect(document.querySelector('#search-container')).toBeTruthy();
  expect(document.querySelector('#add-section')).toBeTruthy();
  expect(document.querySelector('#msg-container')).toBeTruthy();

});

it('Style creation in index.html', () => {
  expect(getSelector('.row').style).toEqual(expect.objectContaining({ 'display': 'flex', 'justify-content': 'space-between', 'align-items': 'center' }));
  expect(getSelector('#header').style).toEqual(expect.objectContaining({ 'display': 'flex', 'align-items': 'center' }));
  expect(getSelector('#logo-container').style).toEqual(expect.objectContaining({ 'display': 'flex', 'align-items': 'center' }));
  expect(getSelector('#footer').style).toEqual(expect.objectContaining({ 'display': 'flex', 'justify-content': 'center', 'align-items': 'center' }));
  expect(getSelector('body').style.margin).toBe('0');
  expect(getSelector('body').style).toEqual(expect.objectContaining({ 'background-color': '#ffffff' }));
  expect(getSelector('#header').style).toEqual(expect.objectContaining({ 'background-color': '#1161F5' }));
  expect(getSelector('#msg-container').style).toEqual(expect.objectContaining({ 'height': '85%', 'background-color': '#ffffff', 'overflow': 'scroll' }));
});
