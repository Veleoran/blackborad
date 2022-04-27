const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:4hTpCrYPvahy5IUq@cluster0.r9ouk.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .catch(error => console.error(error))
  .then(() => console.log('Database connected'));
