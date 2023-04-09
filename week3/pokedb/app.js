require("./database/connection");
const express = require('express');
const app = express();
const pokemonRoutes = require('./pokemonRoutes');




app.use(express.json());
app.use('/pokemons', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Run one of these files with "node app.js" or "yarn start"
require('./modules/subDocuments.js')
// require('./modules/foreignKeys.js')