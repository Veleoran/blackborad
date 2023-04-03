

const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Veldoran:Aju6QhdXyRsGtPv@cluster0.wofhepd.mongodb.net/blackboard2';

mongoose.connect(connectionString, { connectTimeoutMS: 2000, })
 .then(() => console.log('Database connected'))
 .catch(error => console.error(error));