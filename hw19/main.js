// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// ﻿sum(3) = 3
// sum(5) = 8
// sum(20) = 28

// function getAdder () {
//   let result = 0;
//   return function (numb) {
//     result += numb;
//     return result;
//   };
// };
// const sum = getAdder();
// console.log(sum(3))
// console.log(sum(5))
// console.log(sum(20))

function adder() {
  let result = 0;
  return function (numb) {
    result += numb;
    return numb;
  };
}
const sum = adder();
