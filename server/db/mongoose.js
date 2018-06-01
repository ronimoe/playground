const mongoose = require('mongoose');

// Promise Library
mongoose.Promise = global.Promise;
// Connect to DB
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}