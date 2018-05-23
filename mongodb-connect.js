// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

// Object Destructuring
// let user = {name: 'Melon', age: 17};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('cannot insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // insert new doc into users (name, age, location)

  // db.collection('Users').insertOne({
  //   //_id: 123,
  //   name: 'Jane Doe',
  //   age: 9,
  //   location: 'Bandung'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Cannot insert Users');
  //   };
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});