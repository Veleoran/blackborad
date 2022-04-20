const fs = require('fs');
const path = require('path');
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

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

console.log(getSelector('.card-element').style)

// COLORS
it("Ckeck if square", () => {
    expect(document.querySelectorAll('.color').length).toBe(5);
});

it("Color square size", () => {
    const selector = getSelector('.color');
    expect(selector.style.height).toBe('85px');
    expect(selector.style.width).toBe('85px');
});

it("Color square colors", () => {
    expect(getSelector('.darkgrey').style).toEqual(expect.objectContaining({ 'background-color': '#212529' }));
    expect(getSelector('.grey').style).toEqual(expect.objectContaining({ 'background-color': '#CED4DA' }));
    expect(getSelector('.darkblue').style).toEqual(expect.objectContaining({ 'background-color': '#03045E' }));
    expect(getSelector('.blue').style).toEqual(expect.objectContaining({ 'background-color': '#023E8A' }));
    expect(getSelector('.lightblue').style).toEqual(expect.objectContaining({ 'background-color': '#CAF0F8' }));
});

//BUTTONS
it("Check if button", () => {
    expect(document.querySelector('.btn')).toBeTruthy();
});

it("Check button css", () => {
    const selector = getSelector('.btn');
    expect(selector.style.width).toBe('120px');
    expect(selector.style.cursor).toBe('pointer');
    expect(selector.style).toEqual(expect.objectContaining({ 'border-radius': '4px' }));
    expect(selector.style).toEqual(expect.objectContaining({ 'background-color': '#03045E' }));
});

it("Check button css hover", () => {
    const selector = getSelector('.btn:hover');
    expect(selector.style).toEqual(expect.objectContaining({ 'background-color': '#023E8A' }));
});

// TABLES
it("Check if table", () => {
    expect(document.querySelector('table')).toBeTruthy();
});

it("Check table css", () => {
    const selector = getSelector('table');
    expect(selector.style.border).toBe('1px solid #DFDFDF');
    expect(selector.style).toEqual(expect.objectContaining({ 'border-radius': '4px' }));
});

// TYPOGRAPHY
it("Check if typo span", () => {
    expect(document.querySelector('.bold')).toBeTruthy();
    expect(document.querySelector('.regular')).toBeTruthy();
});

it("Check if typo in body css", () => {
    expect(getSelector('body').style).toEqual(expect.objectContaining({ 'font-family': "'Noto Sans', sans-serif" }));
});

it("Check if typo span css", () => {
    expect(getSelector('.bold').style).toEqual(expect.objectContaining({ 'font-weight': '400' }));
    expect(getSelector('.bold').style).toEqual(expect.objectContaining({ 'font-size': '20px' }));
    expect(getSelector('.regular').style).toEqual(expect.objectContaining({ 'font-weight': '200' }));
    expect(getSelector('.regular').style).toEqual(expect.objectContaining({ 'font-size': '20px' }));
});

// CARDS
it("Check if card exists", () => {
    expect(document.querySelector('.card-element')).toBeTruthy();
});

it("Check card css", () => {
    const selector = getSelector('.card-element');
    expect(selector.style.border).toBe('1px solid #DFDFDF');
    expect(selector.style).toEqual(expect.objectContaining({ 'border-radius': '4px' }));
});


