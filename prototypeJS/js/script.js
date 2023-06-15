// "use strict";
// ////prototype//////
// const person = new Object({
//   name: "max",
//   age: 25,
//   greet: function () {
//     console.log("greet");
//   },
// });
// console.log(Object);
// console.log(person);
// Object.prototype.sayHello = function () {
//   console.log("hello");
// };

// const lena = Object.create(person);
// lena.name = "elena";
// console.log(lena);
// const str = new String("i am string");
// console.log(str);

// /////this//////
// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "er",
//   age: 25,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`name is ${this.name}`); ///this.name=person.name
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };
// hello();

// person.sayHelloWindow();
// person.logInfo();

// const lena = {
//   name: "elena",
//   age: 23,
// };

// const fnLenaInfoLog = person.logInfo.bind(lena); //this в обьeкте lena
// fnLenaInfoLog("frontend", "32456777");
// //1
// const fnLenaInfoLog = person.logInfo.bind(lena, "frontend", "32456777"); //this в обьeкте lena
// fnLenaInfoLog();

///call apply bind
//bind создает новую функцию-ее надо вызывать
//  person.logInfo.bind(lena, "frontend", "32456777")();
//call сразу вызывает созданную новую функцию
// person.logInfo.call(lena, "frontend", "32456777");
//apply сразу вызывает созданную новую функцию--параметры передаются в массиве
// person.logInfo.apply(lena, ["frontend", "32456777"]);

//////////////practic////
// const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }
//console.log(multBy(array, 5));

// Array.prototype.multBy = function (n) {
//   console.log("multBy", this);
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(2));

/////замыкание/////////
// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10)); 11
// console.log(addOne(20)); 21

// console.log(addTen(10));  20
// console.log(addTen(20));   30

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = urlGenerator("com");

// console.log(comUrl("google"));  //https://google.com
// console.log(comUrl("netflix"));  //https://netflix.com
// const ruUrl=urlGenerator('ru')

/////Написать свою функцию bind//////
function bind(context, fn) {
  return function (...args) {
    console.log(args);
    fn.apply(context, args);
    console.log(args);
  };
}
function logPerson() {
  console.log(`Person:${this.name}, ${this.age},${this.job}`);
}

const person1 = { name: "Михаил", age: "23", job: "а" };
const person2 = { name: "Елена", age: "32", job: "м" };

bind(person1, logPerson)();
bind(person2, logPerson)();
