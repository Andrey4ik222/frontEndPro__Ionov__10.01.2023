// Створити програму для відображення результатів голосування. З наступними умовами:

// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const wrapper = document.querySelector(".wrapper");

const terribleCount = document.querySelector(".terrible-emoji--counter");
const badCount = document.querySelector(".bad-emoji--counter");
const mediumCount = document.querySelector(".medium-emoji--counter");
const funnyCount = document.querySelector(".funny-emoji--counter");
const superCount = document.querySelector(".super-emoji--counter");
let terribleCountDefault = 0;
let badCountDefault = 0;
let mediumCountDefault = 0;
let funnyCountDefault = 0;
let superCountDefault = 0;

function vote(event) {
  const target = event.target;

  if (target.classList.contains("terrible-emoji--btn")) {
    terribleCountDefault += 1;
    terribleCount.innerHTML = terribleCountDefault;
  } else if (target.classList.contains("bad-emoji--btn")) {
    badCountDefault += 1;
    badCount.innerHTML = badCountDefault;
  } else if (target.classList.contains("medium-emoji--btn")) {
    mediumCountDefault += 1;
    mediumCount.innerHTML = mediumCountDefault;
  } else if (target.classList.contains("funny-emoji--btn")) {
    funnyCountDefault += 1;
    funnyCount.innerHTML = funnyCountDefault;
  } else if (target.classList.contains("super-emoji--btn")) {
    superCountDefault += 1;
    superCount.innerHTML = superCountDefault;
  }
}

wrapper.addEventListener("click", vote);
