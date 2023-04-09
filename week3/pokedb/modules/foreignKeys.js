const { Pokemon_V2, Type } = require("../database/setup.js"); // Do not edit/remove this line !

function createPokemon(pokemonName, typeId) {
  const newPokemon = new Pokemon_V2({
    name: pokemonName,
    types: [typeId]
  });

  newPokemon.save().then(() => console.log("Pokemon created"));
}

function displayPokemons() {
  Pokemon_V2.find()
    .populate("types")
    .then(data => {
      console.log("ALL POKEMONS =>", data);
    });
}

function updateType(typeName, typeColor) {
  Type.updateOne(
    { name: typeName },
    { $set: { color: typeColor } }
  ).then(() => console.log("Type updated"));
}

function deleteType(typeName) {
  Type.deleteOne({ name: typeName }).then(() => console.log("Type deleted"));
}





// //! Create new pokemon document/object in 'pokemons' collection
// function createPokemon(pokemonName, ObjectId) {
//   // Write your code here
// }
// // createPokemon('pikachu', 'mongo _id value') you can get an _id from a type document in database

// //! Display all pokemons from database
// function displayPokemons() {
// 	// Write your code here
// }
// // displayPokemons();

// // //! Update a type document/object in 'types' collection
// function updateType(typeName, typeColor) {
//   // Write your code here
// }
// // updateType('rock', 'grey')

// //! Delete a type document/object in 'types' collection
// function deleteType(typeName) {
//   // Write your code here
// }
// // deleteType('rock')

// Do not edit/remove the code below this line !
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};
