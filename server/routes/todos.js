const express = require('express');
const router = express.Router();
let Todo = require('../models/todoModel');

router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json("Error: " + err));
});

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const id = req.body.id;
    const task = req.body.task;
    const completed = req.body.completed;

    const newTodo = new Todo({
        id,
        task,
        completed,
    });

    newTodo.save()
        .then(() => res.json('Todo added to the list...'))
        .catch(err => res.status(400).json("Error: " + err));
});

router.put('/update/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.task = req.body.task;
            todo.completed = req.body.completed;

            todo.save()
                .then(() => res.json('Todo updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted...'))
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;
