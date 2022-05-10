const drugs = require('./drugs');

function getDrugDescriptionByName(name) {
	return drugs.find(drug => drug.name === name).description;
}

function getDrugTypeByName(name) {
	return drugs.find(drug => drug.name === name).type;
}

function getDrugNamesByGroup(groupName) {
	const drugsByGroup = drugs.filter(drug => drug.groups.includes(groupName));
	return drugsByGroup.map(drug => drug.name).sort();
}

module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };
