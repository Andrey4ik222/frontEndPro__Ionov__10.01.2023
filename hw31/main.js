// 1. Избавится от неуникальных элементов массива
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const set = new Set(numbersArray);
const uniqueNumbers = Array.from(set);
console.log(uniqueNumbers);

// 2. Создать Map который будет по переданному объекту возвращать строку привествия
const userBob = {
  name: "Bob",
};
const userJane = {
  name: "Jane",
};
const myMap = new Map();
myMap.set(userBob, "Hello Bob nice to see you");
myMap.set(userJane, "How your kids doing Jane?");
function greetUser(obj) {
  const greet = myMap.get(obj);
  return greet;
}
console.log(greetUser(userBob));
console.log(greetUser(userJane));

// 3. Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
function transformationObjAndMap(elem) {
  if (elem.size === undefined) {
    const map = new Map(Object.entries(elem));
    return map;
  } else {
    const obj = Object.fromEntries(elem);
    return obj;
  }
}
const map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

const obj = {
  name: "John",
  age: 30,
};

console.log(transformationObjAndMap(map));
console.log(transformationObjAndMap(obj));
