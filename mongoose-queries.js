const {ObjectID} = require('mongodb');

const {mongose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');

// const id = '5b0bac9ae8f7470d7805931b11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid!');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found!');
//   }
//   console.log('Todo By ID: ', todo)
// }).catch((e) => console.log(e));
