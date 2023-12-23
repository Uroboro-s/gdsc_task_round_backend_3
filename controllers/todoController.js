
const Todo = require('../models/todo')

const asyncHandler = require('express-async-handler');

//GET all todos
exports.todos = asyncHandler(async (req, res, next) => {

    //console.log(Todo);
    const allTodos = await Todo.find({}).exec();

    if(!allTodos)
        return next(new Error("404 not found?"));

    res.status(200).json({
        data: allTodos
    });

});

//GET one todo specified by id
exports.getOne = asyncHandler( async (req, res, next) => {
    const todo = await Todo.findById(req.params.id);

    if(!todo)
        return next(new Error("404 not found?"));

    res.status(200).json({
        data: todo,
    });

});


//CREATE one todo 
exports.createOne = asyncHandler( async (req, res, next) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    await todo.save();

    res.status(201).json({
        data: todo,
    });

});


//UPDATE one todo specified by id
exports.updateOne = asyncHandler( async (req, res, next) => {  
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if(!todo)
        return next(new Error("404 not found?"));
    //console.log("here");
    res.status(200).json({
        data: todo,
    });

});


//DELETE one todo specified using id
exports.deleteOne = asyncHandler( async (req, res, next) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if(!todo)
        return next(new Error("404 not found?"));

    res.status(200);
    res.json();
});
