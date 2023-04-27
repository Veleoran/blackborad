const mongoose = require('mongoose');

const connectionString = "mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/morningnews5";
OWM_API_KEY = "4810d2c7945fe82541e351ffa914d368";
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
module.exports = mongoose;