const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos";

// function fethTodos() {
//   console.log("fetch todo started");
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fethTodos()
//   .then((data) => {
//     console.log("data:", data);
//   })
//   .catch((e) => console.error(e));

async function fetchAsyncTodos() {
  console.log("fetch todo started");
  try {
    await delay(2000); //пока промис не выполнится не будет перехода на др
    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data);
  } catch (e) {
    console.error(e);
  } finally {
    ///выполнится в любом случае
  }
}

fetchAsyncTodos();
