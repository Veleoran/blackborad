const mongoose = require('mongoose');
connectionString  = 'mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/myoldfriendmongoose';
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));