const {
	getDrugDescriptionByName,
	getDrugTypeByName,
	getDrugNamesByGroup
} = require('./app');
const drugs = require('./drugs');

it('Get drug description by name - Codeine', () => {
	const drugDescription = getDrugDescriptionByName('Codeine');

	expect(drugDescription).toBe('Codeine is an opioid analgesic used to treat moderate to severe pain when the use of an opioid is indicated.');
});

it('Get drug type by name - Salbutamol', () => {
	const drugType = getDrugTypeByName('Salbutamol');

	expect(drugType).toBe('Small Molecule');
});

it('Get drug names by group - Illicit', () => {
	const drugs = getDrugNamesByGroup('Illicit');

	expect(drugs).toEqual(['Codeine']);
});
