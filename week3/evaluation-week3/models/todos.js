// Write your code here
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
 title: String,
 priority: Number,
 
});



const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;
// ROUTE GET /todos
//EXEMPLE DE RÉPONSE :
// {
//   "todos": [
//     {"title": "Aller faire les courses", "priority": 2},
//     {"title": "Faire mes flashcards", "priority": 1},
//     {"title": "Faire une sieste", "priority": 3}
//   ]
// }



// ROUTE POST /todos
//EXEMPLE DE RÉPONSE :
// {
//   "result": true
// }
