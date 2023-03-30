const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

// Insert your code here
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const connectionString = require('./connectionString');

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const fruitSchema = new mongoose.Schema({
  gen: { type: String, unique: true, required: true },
  species: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true }
});

fruitSchema.plugin(uniqueValidator);

const Fruit = mongoose.model('Fruit', fruitSchema);

async function fetchFruits() {
  const response = await fetch('https://www.fruitmap.org/api/trees');
  const data = await response.json();
  return data;
}

async function insertFruits() {
  const fruits = await fetchFruits();
  const promises = fruits.map(async (fruit) => {
    const newFruit = new Fruit({
      gen: fruit.gen,
      species: fruit.species,
      name: fruit.name
    });

    try {
      await newFruit.save();
      console.log(`Inserted: ${fruit.name}`);
    } catch (err) {
      if (err.code === 11000) {
        console.log(`Duplicate ignored: ${fruit.name}`);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  });

  await Promise.all(promises);
  console.log('Finished inserting fruits');
  mongoose.connection.close();
}

insertFruits();
