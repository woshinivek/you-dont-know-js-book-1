// let a;

// console.log(typeof a);

// a = "hello";
// console.log("Hello: ", typeof a);

// a = 42;
// console.log("42: ", typeof a);

// a = true;
// console.log("true: ", typeof a);

// a = false;
// console.log("false: ", typeof a);

// a = null;
// console.log("null: ", typeof a);

// a = [1, 2, 3];
// console.log("[1,2,3]: ", typeof a);

// a = { a: 2, d: 3 };
// console.log("{a: 2, d: 3}; ", typeof a);

// a = Symbol();
// console.log("Symbol: ", typeof a);

// a = undefined;
// console.log("undefined: ", typeof a);

// -------ОБЪЕКТЫ-------

// let key = "Hello meybi";

// const obj = {
//   "Hello meybi": "a guang",
//   b: 42,
//   c: true,
// };

// console.log(obj);

// console.log(obj.a);
// console.log(obj[key]);

// const objA = {
//   a: 2,
//   "hello hi": "Nihao brazer",
// };

// alert(objA["hello hi"]);

// let key = "hello hi";

// const objA = {
//   a: 2,
//   "hello hi": "Nihao brazer",
// };

// console.log(objA[key]);

// console.log(key);

// let fruit = prompt("Введи фрукт");
// let quantity = Number(prompt("введи количество"));

// const bag = {
//   [fruit]: quantity,
// };

// console.log(`Вы добавили ${fruit} в количестве ${bag.quantity} штук`);
// console.log(bag.apple);

// -------МАССИВЫ-------

// const simpleArray = ["hello, ni hao", 155, true, ""];

// if (simpleArray[2]) {
//   console.log("Из IF: ", simpleArray[0]);
//   console.log("А длина этого массива: ", simpleArray.length);
// }

// console.log(simpleArray[0]);
// console.log(simpleArray[1]);

// console.table(simpleArray);

// const a = [1, 2, 3];
// console.log(a);
// console.log(typeof a);

// const b = String(a);
// console.log(b);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const greeting = matrix[2][2];
console.log(`${greeting}, earthlings!`);

console.log(matrix[1][2]);
console.log(matrix[2][1]);



// -------ФУНКЦИИ-------

// const foo = function () {
//   return `Значение свойства number ${number}`;
// };

// foo.number = 30;

// console.log(foo.number);
// console.dir(foo);

// ------МЕТОДЫ ВСТРОЕННЫХ ТИПОВ------

// const a = 42;
// const b = "Hello";

// console.log(b.toUpperCase());
// console.log(a);

// console.log(typeof b);
