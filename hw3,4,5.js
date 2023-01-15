const num1 = prompt("Перше число");
const num2 = prompt("Друге число");
const sum = Number(num1) + Number(num2);
const diff = Number(num1) - Number(num2);
const mult = Number(num1) * Number(num2);
const quot = Number(num1) / Number(num2);
alert(`${num1} + ${num2} = ${sum}, 
${num1} - ${num2} = ${diff},
${num1} * ${num2} = ${mult}, 
${num1} / ${num2} = ${quot}`);

const hours = prompt("Будь ласка, введіть кількість годин");
const secInHour = 3600;
const result = Number(hours) * Number(secInHour);
alert(`${result}`);

const number1 = prompt("Перше число");
const number2 = prompt("Друге число");
const number3 = prompt("Третє число");
const average = (Number(number1) + Number(number2) + Number(number3)) / 3;
alert(`${average}`);