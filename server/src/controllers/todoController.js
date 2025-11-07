const Todo = require('../models/Todo');

exports.create = async (req, res) => {
  const { text } = req.body;
  try {
    const todo = new Todo({ text, user: req.user });
    await todo.save();
    res.json(todo);
  } catch (e) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.list = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user });
    res.json(todos);
  } catch (e) {
    res.status(500).json({ msg: 'Server error' });
  }
};
