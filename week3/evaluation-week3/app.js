var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');

require('./models/connection');
const Todo = require('./models/todos');


Todo.find().then(data => { console.log(data); });

const newTodo = new Todo({
 name: 'Walk the dog',
 assignedTo: ['John', 'Jane'],
 priority: 1,
 done: false,
 dateDue: new Date(),
});

newTodo.save().then(newDoc => {
 console.log(newDoc);
});


var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
 
module.exports = app;
