const { Pokemon } = require("../database/setup"); // Do not edit/remove this line !

//! Display pokemons from database
function displayPokemons() {
  Pokemon.find().then(data => {
    console.log("ALL POKEMONS =>", data);
  });
}
displayPokemons()

//! Create a new pokemon in database
function createPokemon(pokemonName, typeName, typeColor) {
  const newPokemon = new Pokemon({
    name: pokemonName,
    types: [{ name: typeName, color: typeColor }],
  });
  newPokemon.save().then(pokemon => console.log("SAVED POKEMON =>", pokemon));
}
// createPokemon('pikachu', 'electric', 'yellow')

//! Add a sub-document/sub-object to an array
async function addType(pokemonName, typeName, typeColor) {
  Pokemon.updateOne(
    { name: pokemonName },
    { $push: { types: { name: typeName, color: typeColor } } }
  ).then(result => {
    console.log("POKEMON UPDATED =>", result);
  });
}
// addType('pikachu', 'electric', 'yellow')

//! Update an array of sub-documents/sub-objects
async function updateType(typeName, typeColor) {
  Pokemon.updateMany(
    { types: { $elemMatch: { name: typeName } } },
    { $set: { "types.$.color": typeColor } }
  ).then(result => {
    console.log("POKEMONS UPDATED =>", result);
  });
}
// updateType('rock', 'grey')

//! Delete a sub-document from an array
async function deleteType(typeName) {
  Pokemon.updateMany(
    { types: { $elemMatch: { name: typeName } } }, // alternatively, you could match using this shorthand syntax : { "types.name": typeName },
    { $pull: { types: { name: typeName } } }
  ).then(result => {
    console.log("TYPES DELETED =>", result);
  });
}
// deleteType('pikachu', 'electric')

// Do not edit/remove the code below this line !
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};
