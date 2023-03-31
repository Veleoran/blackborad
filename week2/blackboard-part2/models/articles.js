const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
 name: String,
 price: Number,
 stock: Number,
 weight :Number,
 image:String
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;