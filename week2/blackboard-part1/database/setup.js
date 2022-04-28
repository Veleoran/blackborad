// You should close this file and not modify it 😉

const mongoose = require('mongoose');
const connectionString = require('../connection');

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .catch(error => console.error(error))
  .then(() => console.log('Database connected'));

const articleSchema = mongoose.Schema({
	name: String,
	price: Number,
	stock: Number,
	weight: Number,
	image: String,
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;
