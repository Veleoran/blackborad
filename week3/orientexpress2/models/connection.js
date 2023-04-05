const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/orientexpress2';
mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() =>{
    console.log("database connected ")
} ) 