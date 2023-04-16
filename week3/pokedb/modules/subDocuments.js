const Pokemon = require("./models/pokemonWithForeignKey");


// Display pokemons from database
function displayPokemons() {
  Pokemon.find().then((data) => {
    console.log("ALL POKEMONS =>", data);
  });
}

// Create a new pokemon in database
function createPokemon(pokemonName, typeName, typeColor) {
  const newPokemon = new Pokemon({
    name: pokemonName,
    types: [{ name: typeName, color: typeColor }],
  });

  newPokemon.save().then(() => console.log("Pokemon created"));
}

// Add a sub-document/sub-object to an array
function addType(pokemonName, typeName, typeColor) {
  Pokemon.updateOne(
    { name: pokemonName },
    { $push: { types: { name: typeName, color: typeColor } } }
  ).then(() => console.log("Type added to Pokemon"));
}

// Update type in "pokemon" collection
function updateType(typeName, typeColor) {
  Pokemon.updateOne(
    { "types.name": typeName },
    { $set: { "types.$.color": typeColor } }
  ).then(() => console.log("Type updated"));
}

// Delete type from "pokemon" collection
function deleteType(typeName) {
  Pokemon.updateOne(
    { "types.name": typeName },
    { $pull: { types: { name: typeName } } }
  ).then(() => console.log("Type deleted from Pokemon"));
}

// Execute functions
displayPokemons();
createPokemon("Pikachu", "Electric", "Yellow");
addType("Pikachu", "Rock", "Brown");
updateType("Electric", "LightYellow");
deleteType("Rock");

// Export functions
module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
};

