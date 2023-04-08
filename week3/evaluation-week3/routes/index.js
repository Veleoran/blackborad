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

// Route GET /todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ todos });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching todos' });
    }
});



// DO NOT EDIT UNDER THIS LINE //
module.exports = router;
