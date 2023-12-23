#! /usr/bin/env node

//execute this by running node populatedb "mongoose-url-with double quotes"

console.log(
    'This script populates some test todos to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Todo = require("./models/todo");

  const todos = [];
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createTodos();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.
  async function todoCreate(index, title, description) {
    const todo = new Todo({ title: title, description: description });
    await todo.save();
    todos[index] = todo;
    console.log(`Added todo: ${title}`);
  }

  
  async function createTodos() {
    console.log(Todo);
    console.log("Adding todos");
    await Promise.all([
      todoCreate(0, "Play", "Football at 6"),
      todoCreate(1, "Party", "Meet friends at 9"),
      todoCreate(2, "Sleep", "sleep early , rise early?"),
    ]);
  }
  
