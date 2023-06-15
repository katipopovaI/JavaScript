// console.log("start");
// console.log("start2");

// function timeout2sec() {
//   console.log("timeout2sec");
// }

// setTimeout(function () {
//   console.log("window");
// }, 5000);

// setTimeout(timeout2sec, 2000);
// console.log("end");

console.log("start");

setTimeout(function () {
  console.log("settimeout with 0");
}, 0);
console.log("end");
console.log("end1");
console.log("end2");
console.log("end3");
setTimeout(function () {
  console.log("settimeout with 0 -2");
}, 0);
// console.log("end");
// console.log("end1");
// console.log("end2");
// console.log("end3");
// setTimeout(function () {
//   console.log("settimeout with 0 -3");
// }, 0);
