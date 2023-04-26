const mongoose = require('mongoose');




const connectionString = 'mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/weatherapp-part2';
OWM_API_KEYS = 'c8c6d4401bf32bb786af86b17f48d75c'
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
