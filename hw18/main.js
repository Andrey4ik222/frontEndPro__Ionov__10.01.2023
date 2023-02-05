// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const array = [1, true, 3, "Nik", 3, "Bob", 14, 5, 6, 9, "Jane", 10];

function average(array) {
  let numberSum = 0;
  let countNumb = 0;
  array.forEach((elem) => {
    if (typeof elem === "number") numberSum += elem;
    countNumb += 1;
  });
  averageNumb = numberSum / countNumb;
  return averageNumb;
}
average(array);
console.log(averageNumb.toFixed(2));

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const numbX = +prompt("Введіть перше число");
const sing = prompt("Оберіть дію з числами(+, -, *, /, % або ^ )");
const numbY = +prompt("Введіть друге число");

function doMath(x, znak, y) {
  let result = 0;
  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = x ** y;
      break;
    default:
      console.log("Будь ласка, введіть +, -, *, /, % або ^");
  }
  return result;
}
console.log(doMath(numbX, sing, numbY));

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// const arrayLength = +prompt("Введіть довжину овновного масива:");

const arrayLength = +prompt("Введіть довжину овновного масива:");
const arrayInsideLength = +prompt("Введіть довжину внутрішніх масивів:");
const arrayMatrix = [];

function arrayFilling(elem, item) {
  for (i = 0; i < elem; i++) {
    arrayMatrix[i] = [];
    for (j = 0; j < item; j++) {
      const element = prompt(`Ввести ${j} елемент:`);
      arrayMatrix[i][j] = element;
    }
  }
  return arrayMatrix;
}
arrayFilling(arrayLength, arrayInsideLength);
console.log(arrayMatrix);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const userString = prompt("Введіть строку:");
const userSymbol = prompt("Введіть символи які потрібно видалити:");

function deleteLetters(str, letters) {
  let arr = str.split("");
  for (let i = 0; i < letters.length; i++) {
    arr = arr.filter((element) => {
      return element !== letters[i];
    });
  }
  return arr.join("");
}
console.log(deleteLetters(userString, userSymbol));
