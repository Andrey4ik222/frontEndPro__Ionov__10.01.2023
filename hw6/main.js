const firstLine = prompt("Перший рядок");
const secondLine = prompt("Другий рядок:");
const thirdLine = prompt("Третій рядок:");
const mult = firstLine + secondLine + thirdLine;
alert(mult);

const num = prompt("Введіть п'ятизначне число:");
if (num.length != 5) {
  alert("Введить п'ятизначне число");
} else {
  alert(
    `${num[0] + " " + num[1] + " " + num[2] + " " + num[3] + " " + num[4]}`
  );
}
