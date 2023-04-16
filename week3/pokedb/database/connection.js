const mongoose = require("mongoose");
require('dotenv').config();

// Insert your connection string inside this variable
const connectionString = process.env.MONGODB_URI;
mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch(error => console.error(error));

module.exports = mongoose; // Do not edit/remove this line
