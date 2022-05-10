const { getStock, getStockByTimestamps } = require('./stocks');

it('Get not recalled stock', () => {
	expect(getStock(1311, false)).toBe(54000);
});

it('Get recalled stock', () => {
	expect(getStock(1490, true)).toBe(7000);
});

it('Get stock by timestamps', () => {
	const timestampStart = new Date('2043-07-05').getTime();
	const timestampEnd = new Date('2043-10-01').getTime();
	expect(getStockByTimestamps(1490, timestampStart, timestampEnd)).toBe(5000);
});
