const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// 1. Знайти суму та кількість позитивних елементів.
const positiveNumbers = numbersArray.filter((numb) => numb > 0);
console.log(`Кількість позитивних елементів: ${positiveNumbers.length}`);
let sum = 0;
positiveNumbers.map((numb) => {
  sum += numb;
});
console.log(`Сума позитивних елементів: ${sum}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const minNumber = Math.min(...numbersArray);
console.log(minNumber);
const indexMinNumber = numbersArray.findIndex((i) => i == minNumber);
console.log(indexMinNumber);

// 3. Знайти максимальний елемент масиву та його порядковий номер.
const maxNumber = Math.max(...numbersArray);
console.log(maxNumber);
const indexMaxNumber = numbersArray.findIndex((i) => i == maxNumber);
console.log(indexMaxNumber);

// 4. Визначити кількість негативних елементів.
const negativeNumbers = numbersArray.filter((numb) => numb < 0);
console.log(negativeNumbers.length);

// 5. Знайти кількість непарних позитивних елементів.
const oddPosNumbers = positiveNumbers.filter((numb) => numb % 2 != 0);
console.log(oddPosNumbers.length);

// 6.Знайти кількість парних позитивних елементів.
const evenPosNumbers = positiveNumbers.filter((numb) => numb % 2 == 0);
console.log(evenPosNumbers.length);

// 7. Знайти суму парних позитивних елементів.
let sumEvenPosNumb = 0;
evenPosNumbers.map((numb) => {
  sumEvenPosNumb += numb;
});
console.log(sumEvenPosNumb);

// 8. Знайти суму непарних позитивних елементів.
let sumOddPosNumb = 0;
oddPosNumbers.map((numb) => {
  sumOddPosNumb += numb;
});
console.log(sumOddPosNumb);

// 9. Знайти добуток позитивних елементів.
multPosNum = 1;
positiveNumbers.map((numb) => {
  multPosNum = multPosNum * numb;
});
console.log(multPosNum);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
console.log(maxNumber);
const result = numbersArray.map((numb) => (numb == maxNumber ? numb : 0));
console.log(result);
