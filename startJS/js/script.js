// строгий режим
"use strict";

//верное обьявление
let age;
let info123;
let $size;
let _color;

// //неверное обьявление
// let 123info;
// let my-age;
//зарезервированные слова-нельзя
// let let;
// let break;
// let for;

//стиль CamelCase(lowerCamelCase)-каждое новое слово кроме 1
let leftSidebarSize;

let myName = "Kate",
  myAge = 32,
  myMessage = "hello";
myAge = 18;

///constant
const myNewAge = 20;
//с заранее известными значениями -верхний регистр и нижннее
const BLOCK_SIZE = 25;
//изменить значения const можно только в обьектах
const userProfile = {
  name: "kate",
  age: 25,
  message: "hello1",
};
userProfile.age = 18;

///var использование до обьявления
//видна в циклах и тд

console.log("Hello");
["js", "JS"].forEach(alert);
console.log("Learn" + "JS");

//////ТИПЫ ДАННЫХ//////////
//получить тип данных-typeof(переменная)
//undefined null boolean number bigint string symbol
//object function

//undefined- была ли определена переменная
let userName;
console.log(typeof userName);
console.log(userName);

//null-пустое значение
//тип данных infinity-number
//NaN-вычислительная ошибка(typeof=number)

//строковое преобразование
let userAge = 52;
userAge = String(userAge);

let userNumberAge = "52";
userNumberAge = Number(userNumberAge);

// строки//////
//пустая строка=false
//если в выражении + есть строка то результат будет строка
// "25"-5=20(number)
//10*"80"=800(number)
//3*"Hello"=NaN(number)
//+"25"=25(number)

// //постфиксная форма--получаем нач значение
// let a=5;
// let b=a++; //b=5

// //префиксная форма---получаем результат
// let a=5;
// let b=++a; //b=6

//операции сравнения(true/false)
// 'b'>'a'-->true
// 'a'>'A'-->true
// 0--->false

// ///в операция сравнения идет преобразование к числам
// null--->0 (false)
// undefined->NaN

//ллогические операторы
//ИЛИ  ||
//1 true
//последнее false

//И &&
//1 false
//последнее true

// console.log("35" * "22");

//рекурсия
function calcSum(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSum(numOne, numTwo - 1);
  }
}
console.log(calcSum(2, 3));

function showNumber(num) {
  console.log(num);
  let timerId = setTimeout(showNumber, 1000, ++num);
  if (num === 6) {
    clearInterval(timerId);
  }
}
setTimeout(showNumber, 1000, 1);
