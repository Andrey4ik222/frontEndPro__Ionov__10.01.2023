const numbersArray = [2, 34, 1, 8, 3, 5, 4];
const newNumbersArray = numbersArray.sort((a, b) => a - b);
console.log(newNumbersArray);
newNumbersArray.splice(2, 3);
console.log(newNumbersArray);

const numb1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numb2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numb1Array.forEach((numb1) => {
// numb2Array.forEach((numb2) => {
//   console.log(numb1 * numb2)
// })
// })
