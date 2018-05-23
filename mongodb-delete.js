// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // Delete Many
  // db.collection('Todos').deleteMany({text: 'Go go'}).then((result) => {
  //   console.log(result);
  // });

  // Delete One
  // db.collection('Todos').deleteOne({text: 'too'}).then((result) => {
  //   console.log(result);
  // });

  // Find One and Delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Jane Doe'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b0592471cd60d101fa22bc0')
  }).then((result) => {
    console.log(result);
  });



  //client.close();
});