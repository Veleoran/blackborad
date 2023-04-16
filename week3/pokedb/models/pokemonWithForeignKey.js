const mongoose = require("mongoose");

const PokemonWithForeignKeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  types: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
    },
  ],
});

const PokemonWithForeignKey = mongoose.model("PokemonWithForeignKey", PokemonWithForeignKeySchema);

module.exports = PokemonWithForeignKey;
