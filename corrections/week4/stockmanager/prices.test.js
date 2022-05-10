const { getAveragePrice, getAverageUnitPrice, getMedianPrice, getMedianUnitPrice } = require('./prices');

it('Get average price', () => {
	expect(getAveragePrice('Lipton')).toBe(1.61);
});

it('Get average unit price', () => {
	expect(getAverageUnitPrice('Lipton')).toBe(1.28);
});

it('Get median price', () => {
	expect(getMedianPrice('Amora')).toBe(1.95);
});

it('Get median unit price', () => {
	expect(getMedianUnitPrice('Amora')).toBe(5.62);
});
