const operations = prompt("Яку математичну дію ви бажаєте зробити?");
const num1 = +prompt("Введіть перше число");
const num2 = +prompt("Введіть друге число");
const add = num1 + num2;
const diff = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
if (operations == "add") {
  alert(`${num1} + ${num2} = ${add}`);
} else if (operations == "diff") {
  alert(`${num1} - ${num2} = ${diff}`);
} else if (operations == "mult") {
  alert(`${num1} * ${num2} = ${mult}`);
} else if (operations == "div") {
  alert(`${num1} / ${num2} = ${div}`);
} else alert("Будь ласка, виберіть операцію: sum, diff, mult або div!");