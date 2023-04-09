const express = require('express');
const router = express.Router();
const Pokemon = require('./models/pokemon'); // Assurez-vous d'avoir créé un modèle Pokemon dans un fichier séparé

// Créer un nouveau Pokémon
app.post('/pokemons', async (req, res) => {
  const pokemon = new Pokemon(req.body);
  try {
    await pokemon.save();
    res.status(201).send(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Lister tous les Pokémon
app.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.send(pokemons);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Obtenir un Pokémon par ID
app.get('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).send();
    }
    res.send(pokemon);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Mettre à jour un Pokémon par ID
app.patch('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pokemon) {
      return res.status(404).send();
    }
    res.send(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Supprimer un Pokémon par ID
app.delete('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
    if (!pokemon) {
      return res.status(404).send();
    }
    res.send(pokemon);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Les mêmes routes CRUD que mentionné précédemment
// ...

module.exports = router;
