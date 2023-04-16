const PokemonWithForeignKey = require("./models/pokemonWithForeignKey");
const Type = require("./models/type");

// Create a new pokemon in database
function createPokemon(pokemonName, typeId) {
  const newPokemon = new PokemonWithForeignKey({
    name: pokemonName,
    types: [typeId],
  });

  newPokemon.save().then(() => console.log("Pokemon created"));
}

// Display pokemons from database
function displayPokemons() {
  PokemonWithForeignKey.find()
    .populate("types")
    .then((data) => {
      console.log("ALL POKEMONS =>", data);
    });
}

// Update a type document/object in 'types' collection
function updateType(typeName, typeColor) {
  Type.updateOne(
    { name: typeName },
    { $set: { color: typeColor } }
  ).then(() => console.log("Type updated"));
}

// Delete a type document/object in 'types' collection
function deleteType(typeName) {
  Type.deleteOne({ name: typeName }).then(() => console.log("Type deleted"));
}

// Execute functions
displayPokemons();
createPokemon("Pikachu", "60f2c2b1d91e34c7f5988a2b"); // Replace with a valid Type _id from the database
updateType("Electric", "LightYellow");
deleteType("Rock");

// Export functions
module.exports = {
  displayPokemons,
  createPokemon,
  updateType,
  deleteType,
};
