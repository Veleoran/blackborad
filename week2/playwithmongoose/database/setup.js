// You should close this file and not modify it 😉

const mongoose = require('mongoose');
const connectionString = require('../connection');

mongoose.connect(connectionString, {
	connectTimeoutMS: 1000,
}).catch(error => console.error(error));

const todoSchema = mongoose.Schema({
	name: String,
	priority: Number,
	done: Boolean,
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;
