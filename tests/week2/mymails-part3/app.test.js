const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = fs.readFileSync(path.resolve(__dirname, './correction.js'), 'utf8');

let virtualPage = new JSDOM(html, { runScripts: "dangerously" });
const documentJS = virtualPage.window.document;

const script = documentJS.createElement('script');
script.textContent = js;
documentJS.body.appendChild(script);

it('Check retrieve msg in add-message input', () => {
    const allMessages = documentJS.querySelectorAll('.row').length;
    documentJS.querySelector('#add-message').value = "Hello";

    const element = documentJS.querySelector('#btn-add');
    const event = documentJS.createEvent('MouseEvents');
    event.initMouseEvent('click');
    element.dispatchEvent(event);

    expect(documentJS.querySelectorAll('p')[allMessages].textContent).toBe("Hello");
});

it('Check add message button + update counter + clean input', () => {
    const allMessages = documentJS.querySelectorAll('.row').length;
    const element = documentJS.querySelector('#btn-add');

    const event = documentJS.createEvent('MouseEvents');
    event.initMouseEvent('click');
    element.dispatchEvent(event);

    expect(documentJS.querySelectorAll('.row').length).toBe(allMessages + 1);
    expect(documentJS.querySelector('#add-message').textContent).toBe('');
    expect(documentJS.querySelector('#count').textContent).toBe(JSON.stringify(allMessages + 1));
});

it('Check search message button + retrieve msg + search message + clean input', () => {
    documentJS.querySelector('#search-message').value = "Alexandra";
    const textToCompare = documentJS.querySelector('#search-message').value.toLowerCase();

    const element = documentJS.querySelector('#btn-search');
    const event = documentJS.createEvent('MouseEvents');
    event.initMouseEvent('click');
    element.dispatchEvent(event);

    for (let i = 0; i < documentJS.querySelectorAll('h6').length; i++) {
        if (documentJS.querySelectorAll('h6')[i].textContent.toLowerCase().includes(textToCompare) === false) {
            const textToShow = documentJS.querySelectorAll('.row')[i];
            expect(textToShow.style.display).toBe("none");
        } else {
            const textToHide = documentJS.querySelectorAll('.row')[i];
            expect(textToHide.style.display).toBe("flex");
        }
    }

    documentJS.querySelector('#search-message').value = "";
});

it('Check delete message button + update counter', () => {
    const elems = documentJS.querySelectorAll('.delete');

    for (let i = 0; i < elems.length; i++) {
        const event = documentJS.createEvent('MouseEvents');
        event.initMouseEvent('click');
        elems[i].dispatchEvent(event);
    }
    expect(documentJS.querySelectorAll('.delete').length).toBe(0);
    expect(documentJS.querySelector('#count').textContent).toBe("0");
});
