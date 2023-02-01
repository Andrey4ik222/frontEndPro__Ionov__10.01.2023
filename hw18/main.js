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
