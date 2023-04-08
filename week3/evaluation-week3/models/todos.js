const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');

// GET /todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    res.status(500).json({ message: 'Error getting todos' });
  }
});

// POST /todos
router.post('/', async (req, res) => {
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

module.exports = router;
