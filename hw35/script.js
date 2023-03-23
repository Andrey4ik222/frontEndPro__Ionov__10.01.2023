// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const body = document.body;
const table = document.createElement("table");
body.prepend(table);

for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  table.prepend(tr);
  for (let j = 0; j < 10; j++) {
    const td = document.createElement("td");
    tr.prepend(td);
    td.style.border = "1px solid";
    td.style.width = "40px";
    td.style.height = "30px";
    const mathRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const number = document.createTextNode(mathRandom);
    td.prepend(number);
  }
}
