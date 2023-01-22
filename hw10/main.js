// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let resultFirst = "";
for (i = 10; i <= 20; i++) {
  resultFirst += i + ", ";
}
alert(resultFirst);

// 2. Вивести квадрати чисел від 10 до 20.
let resultSecond = "";
for (i = 10; i <= 20; i++) {
  resultSecond += i ** 2 + ", ";
}
alert(resultSecond);

// 3. Вивести таблицю множення на 7.
let resultThird = "";
for (i = 1; i <= 10; i++) {
  resultThird += `${i} * 7 = ${i * 7}` + ", ";
}
alert(resultThird);

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let resultFourth = 0;
for (i = 1; i <= 15; i++) {
  resultFourth += i;
}
alert(resultFourth);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let resultFifth = 15;
for (i = 15; i <= 35; i++) {
  if (i === 15) continue;
  resultFifth = resultFifth * i;
}
alert(resultFifth);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let resultSixth = 0;
for (i = 1; i <= 500; i++) {
  resultSixth += i / 500;
}
alert(resultSixth);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let resultSeventh = 0;
for (i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    resultSeventh += i;
  }
}
alert(resultSeventh);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let resultEighth = "";
for (i = 100; i <= 200; i++) {
  if (i % 3 === 0) resultEighth += i + ", ";
}
alert(resultEighth);

// 9 - 11. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників.
let resultNinth = "";
let count = 0;
let sum = 0;
let number = +prompt("Введіть натуральне число:");
for (i = 1; i <= 100; i++) {
  if (number % i === 0) {
    resultNinth += i + ", ";
    if (i % 2 === 0) {
      count += 1;
      sum += i;
    }
  }
}
alert(resultNinth);
alert(`Кількість парних дільників: ${count}`);
alert(`Cума парних дільників: ${sum}`);

// 12. Надрукувати повну таблицю множення від 1 до 10.
let resultTwelfth = "";
for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    resultTwelfth = i * j;
    console.log(j + "*" + i + "=" + resultTwelfth);
  }
}
