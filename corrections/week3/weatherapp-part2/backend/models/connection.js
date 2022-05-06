const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://juliebrck:admin@cluster0.lbibn.mongodb.net/lacapsule';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .catch(error => console.error(error))
  .then(() => console.log('Database connected'));
