// Insert your code here

const drugs = require('./data');






// const { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup } = require('./app');


function getDrugDescriptionByName(drugName) {
    const drug = drugs.find(drug => drug.name === drugName);
    return drug ? drug.description : null;

}


function getDrugTypeByName(drugName) {
    const drug = drugs.find( drug => drug.name === drugName);
    return drug ? drug.type : null;
}
// function getDrugNamesByGroup(drugGroup) {
//     const drugsInGroup = drugs.filter(drug => drug.group === drugGroup);
//     return drugsInGroup.map(drug => drug.name);
// }

function getDrugNamesByGroup(drugGroup) {
    const drugsInGroup = drugs.filter(drug => drug.groups.includes(drugGroup));
    return drugsInGroup.map(drug => drug.name).sort();
}



// function getDrugNamesByGroup(drugGroup) {
//     const drugsInGroup = drugs.filter(drug => drug.group && Array.isArray(drug.group) && drug.group.includes(drugGroup));
//     return drugsInGroup.map(drug => drug.name);
// }

// it('Get drug names by group - Investigational', () => {
// 	const drugs = getDrugNamesByGroup('Investigational');

// 	expect(drugs).toEqual(['Morphin', 'Trastuzumab']);
// });





module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };