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

const obj = {
  a: "Hello",
  b: 42,
  c: true,
};

console.log(obj);

const objA = "a";
console.log(objA);

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

let fruit = prompt("Введи фрукт");
let quantity = Number(prompt("введи количество"));

const bag = {
  [fruit]: quantity,
};

console.log(`Вы добавили ${fruit} в количестве ${bag.quantity} штук`);
console.log(bag.apple);
