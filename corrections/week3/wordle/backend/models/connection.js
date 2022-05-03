const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://.../wordle';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .catch(error => console.error(error))
  .then(() => console.log('Database connected'));
