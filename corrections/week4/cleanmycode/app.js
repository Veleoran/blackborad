const drugs = require('./data');

function drugExists(name) {
	return drugs.some(drug => drug.name === name);
}

function isValidDrug({ name, description, type, groups }) {
	if (name && description && type && groups) {
		return true;
	}
	return false;
}

function isValidDrugName(name) {
	const NAME_LIMIT = 530_870_888;

	return name.length <= NAME_LIMIT;
}

function getAllGroups() {
	const groups = drugs.map(drug => drug.groups).flat();
	const uniqueGroups = [...new Set(groups)];

	return uniqueGroups.sort();
}

module.exports = { drugExists, isValidDrug, isValidDrugName, getAllGroups };
