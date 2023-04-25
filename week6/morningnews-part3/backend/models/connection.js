const mongoose = require ("mongoose");

const connectionString = "mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/morningnews3";

mongoose 
.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log("Data base is connected"))
.catch(error => console.error(error));