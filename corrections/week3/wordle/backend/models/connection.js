const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://.../wordle';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
