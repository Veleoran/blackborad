const {
	drugExists,
	isValidDrug,
	isValidDrugName,
	getAllGroups,
} = require('./app');

it('Check if drug exists', () => {
	const morphinExists = drugExists('Morphin');
	const gloubiboulgaExists = drugExists('Doliprane');

	expect(morphinExists).toBe(true);
	expect(gloubiboulgaExists).toBe(false);
});

it('Check if drug is valid', () => {
	const validDrug = isValidDrug({ name: 'Test', description: 'Test', type: 'Test', groups: ['Test'] });
	const invalidDrug = isValidDrug({ name: 'Test2', type: 'Test2', groups: ['Test2'] });

	expect(validDrug).toBe(true);
	expect(invalidDrug).toBe(false);
});

it('Check if drug name is valid', () => {
	const validDrugName = isValidDrugName('Test');
	const invalidDrugName = isValidDrugName('X'.repeat(530_870_889));

	expect(validDrugName).toBe(true);
	expect(invalidDrugName).toBe(false);
});

it('Get all groups', () => {
	const groups = getAllGroups();

	expect(groups).toEqual(['Approved', 'Illicit', 'Investigational', 'Vet approved']);
});
