// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let resultFirst = "";
for (i = 20; i <= 30; i = i + 0.5) {
  resultFirst += i + " ";
}
alert(resultFirst);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let resultSecond = "";
for (i = 10; i <= 100; i = i + 10) {
  resultSecond += `${i} доларів = ${i * 27} гривень` + ", ";
}
alert(resultSecond);

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let resultThird = "";
let number = +prompt("Введіть ціле число:");
for (i = 1; i <= 100; i++) {
  if (i ** 2 < number) {
    resultThird += i + ", ";
  }
}
alert(resultThird);

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let resultFourth = "";
let number2 = +prompt("Введіть ціле число:");
for (i = 1; i <= number2; i++) {
  if (number2 % i === 0 && i != 1 && i != number2) {
    resultFourth = `${number2} є складеним`;
    break;
  } else {
    resultFourth = `${number2} є простим`;
  }
}
alert(resultFourth);

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let resultFifth = "";
let number3 = +prompt("Введіть ціле число:");
for (i = 1; i <= number3; i++) {
  if (3 ** i === number3) {
    resultFifth = "можна";
    break;
  } else {
    resultFifth = "НЕ можна";
  }
}
alert(resultFifth);
