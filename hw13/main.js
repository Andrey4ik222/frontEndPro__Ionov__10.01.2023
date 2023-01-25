const numbersArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// 1. Знайти суму та кількість позитивних елементів.
const positiveNumbersArray = numbersArray.filter((item) => item >= 0);
console.log(`Кількість позитивних елементів: ${positiveNumbersArray.length}`);
let sum = 0;
positiveNumbersArray.map((item) => {
  sum += item;
});
console.log(`Сума позитивних елементів: ${sum}`);
