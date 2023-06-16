// console.log("Запрос данных---");

// setTimeout(() => {
//   console.log("Подготовка данных----");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modifiend = true;
//     console.log("Данные получены--", backendData);
//   }, 2000);
// }, 2000);

// /////////!!!!!!!!!!!!!!!!!!!!!!!!!!!///////////
// /////!!!!!!!!Promise///////
// // promise=class JS

// console.log("Запрос данных---");

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных----");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   console.log("promise resolved", data);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modifiend = true;
//       //   reject(data);---если ответ с ошибкой --выполнено неуспешно
//       resolve(data);
//     }, 2000);
//   });
// })

//   .then((clientData) => {
//     clientData.fromPromise = true;
//     console.log(clientData);
//     return clientData;
//   })
//   .then((newdata) => {
//     console.log(newdata);
//   })
//   .catch((err) => console.error("Error!!!!", err))
//   .finally(() => console.log("finaly!!!!")); ///выполнится даже если промис выполнился неуспешно

/////////////////////////////
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("after 2 sec"));
// sleep(3000).then(() => console.log("after 3 sec"));
Promise.all([sleep(2000), sleep(5000)]).then(() => console.log("All promises"));
Promise.race([sleep(2000), sleep(5000)]).then(() =>
  console.log("Race promises")
);
