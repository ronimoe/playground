const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout((argument) => {
      if (typeof a === 'number' && typeof b === 'number') {
         resolve (a + b);
       } else {
         reject ('Argument must be numbers!');
       }
    }, 2000)
  });
}

asyncAdd(5, 5).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 20);
}).then((res) => {
  console.log('Should be 30, ', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// asyncAdd(5, 5).then((res) => {
//   console.log('Result: ', res);
//   return asyncAdd(res, 20);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log('Should be 30, ', res);
// }, (errorMessage) => {
//   console.log('errorMessage');
// });

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Works inside promise!");
//     reject('Unable to fullfill promise!')
//   }, 3000)
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });