const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

//GET ALL Todos
router.get('/', todoController.todos);

//GET one Todo using ID
router.get('/:id', todoController.getOne);

//POST one Todo
router.post('/', todoController.createOne);

//PUT one Todo using id
router.put('/:id', todoController.updateOne);

//DELETE one Todo using id
router.delete('/:id', todoController.deleteOne);

module.exports = router;