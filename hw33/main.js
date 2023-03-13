// 1. Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.
function* randomNumGener(minNum, maxNum) {
  for (i = 0; i < 10; i++) {
    yield Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }
}
const generator = randomNumGener(5, 25);
for (let value of generator) {
  console.log(value);
}

// 2. Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)
async function deilyRoutine() {
  const wakeUp = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I wake up at 8 am");
    }, 1000);
  });
  const result1 = await wakeUp;
  console.log(result1);

  const brushTeeth = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I brush my teeth");
    }, 3000);
  });
  const result2 = await brushTeeth;
  console.log(result2);

  const breakfast = new Promise((resolve) => {
    setTimeout(() => {
      resolve("I eat breakfast");
    }, 6000);
  });
  const result3 = await breakfast;
  console.log(result3);
}
deilyRoutine();
