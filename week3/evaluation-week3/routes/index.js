var express = require('express');
var router = express.Router();
// DO NOT EDIT OVER THIS LINE //





// DO NOT EDIT OVER THIS LINE //
const Todo = require('../models/todos')

router.post('/todos', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      priority: req.body.priority,
    });
    await todo.save();
    res.status(200).json({ result: true });
  } catch (err) {
    res.status(500).json({ message: 'Error creating todo' });
  }
});

// router.post('/', async (req, res) => {
//     try {
//       const todo = new Todo({
//         title: req.body.title,
//         priority: req.body.priority,
//       });
//       await todo.save();
//       res.status(200).json({ result: true });
//     } catch (err) {
//       res.status(500).json({ message: 'Error creating todo' });
//     }
//   });
  
//   // POST /todos
//   router.post('/', async (req, res) => {
//     try {
//       const todo = new Todo({
//         title: req.body.title,
//         priority: req.body.priority,
//       });
//       await todo.save();
//       res.status(200).json({ result: true });
//     } catch (err) {
//       res.status(500).json({ message: 'Error creating todo' });
//     }
//   });








// let todos = ["Aller faire les courses","Faire mes flashcards","Faire une sieste" ];

// router.get('/todos', (req, res) => {
//  res.json({ todosList: todos });
// });

// ROUTE GET /todos
//EXEMPLE DE RÉPONSE :
// {
//   "todos": [
//     {"title": "Aller faire les courses", "priority": 2},
//     {"title": "Faire mes flashcards", "priority": 1},
//     {"title": "Faire une sieste", "priority": 3}
//   ]
// }


// router.post('/todos', (req, res) => {
//     const newTodo = new Todo({
       
       
//        newUser.save()
//        .then(() => {
//         res.json({ result : true });
//        });
   
//    });
// });




 // todos.push(req.body.newtodos);

// ROUTE POST /todos
//EXEMPLE DE RÉPONSE :
// {
//   "result": true
// }

// DO NOT EDIT UNDER THIS LINE //
module.exports = router;
