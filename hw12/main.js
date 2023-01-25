const numbersArray = [2, 34, 1, 8, 3, 5, 4];
const newNumbersArray = numbersArray.sort((a, b) => a - b);
console.log(newNumbersArray);
newNumbersArray.splice(2, 3);
console.log(newNumbersArray);
