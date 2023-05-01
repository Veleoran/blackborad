const { Pokemon_V2, Type } = require("../database/setup.js"); // Do not edit/remove this line !

// Display all pokemons from database
function displayPokemons() {
  Pokemon_V2.find()
    .populate("types")
    .then(pokemonsData => {
      console.log("ALL POKEMONS => ", pokemonsData);
    });
}
// displayPokemons()

// Create new type document/object in 'types' collection
function addType(typeName, typeColor) {
  const newType = new Type({
    name: typeName,
    color: typeColor,
  });
  newType.save().then(savedType => {
    console.log("SAVED TYPE =>", savedType);
  });
}
// addType('rock', 'brown')

// Create new pokemon document/object in 'pokemons' collection
function createPokemon(pokemonName, ObjectId) {
  const newPokemon = new Pokemon_V2({
    name: pokemonName,
    types: [ObjectId],
  });
  newPokemon.save().then(savedPokemon => {
    console.log("SAVED POKEMON =>", savedPokemon);
  });
}
// createPokemon('pikachu', '_id from a type document')

// Update a type document in 'types' collection
function updateType(typeName, typeColor) {
  Type.updateOne({ name: typeName }, { color: typeColor }).then(result => {
    console.log("TYPE UPDATED =>", result);
  });
}
// updateType('rock', 'grey')

// Delete a type document in 'types' collection
function deleteType(typeName) {
  Type.deleteOne({ name: typeName }).then(() => {
    console.log("TYPE DELETED");
  });
}
// deleteType('rock')

// Do not edit/remove the code below this line !
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};
