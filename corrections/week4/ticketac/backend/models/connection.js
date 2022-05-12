const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:4hTpCrYPvahy5IUq@cluster0.r9ouk.mongodb.net/ticketac';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
