// const square = (x) => {
//   const result = x * x;
//   return result;
// };

//const square = (x) => x * x; // Literal expression

const square = x => x * x; // Literal expression

console.log(square(5));

const user = {
  name: 'Moe',
  sayHi: () => {
    //console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHi(1,2,3);
// user.sayHiAlt();
// user.sayHiAlt(1, 2, 3);