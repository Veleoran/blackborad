const { getRecalledProductsByBrand, getRecalledProductsByTimestamp } = require('./recalls');

it('Get recalled products by brand', () => {
	expect(getRecalledProductsByBrand('Alvalle')).toEqual([4800]);
});

it('Get recalled products by timestamp', () => {
	const timestamp = new Date('2042-07-25').getTime();
	expect(getRecalledProductsByTimestamp(timestamp)).toEqual([2022, 2044]);
});
