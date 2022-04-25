const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://.../miniuno';

mongoose.connect(connectionString, {
  connectTimeoutMS: 2000,
}).catch(error => console.error(error));