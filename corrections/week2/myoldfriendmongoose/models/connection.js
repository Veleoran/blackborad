const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://.../myoldfriendmongoose';

mongoose.connect(connectionString, {
  connectTimeoutMS: 2000,
}).catch(error => console.error(error));
