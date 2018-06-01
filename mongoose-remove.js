const {ObjectID} = require('mongodb');

const {mongose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user');

// Remove All - no document return
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Remove by filter (consider this if u need to query more than one key) - document return
Todo.findOneAndRemove({_id: '5b0e7103c6851c18670968ae'}).then((todo) => {
  console.log(todo);
});

// Remove by ID - document return
// Todo.findByIdAndRemove('5b0e7018c6851c18670968ad').then((todo) => {
//   console.log(todo);
// });