const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

const decoded = jwt.verify(token, '123abc');
console.log(decoded);


// const message = 'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//   id: 3
// };

// const token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'SomeSecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'SomeSecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not change');
// } else {
//   console.log('Data was change dont trust')
// }