const mongoose = require("mongoose");

// Insert your connection string inside this variable
const connectionString = 'mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/pkmn';

mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));


module.exports = connectionString; // Do not edit/remove this line