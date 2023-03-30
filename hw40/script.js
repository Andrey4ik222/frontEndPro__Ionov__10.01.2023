// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:

const array = [1, 2, [2.1, 2.2, 2.3], 3];

function generateList(array) {
  const mainlist = document.createElement("ul");
  document.body.prepend(mainlist);

  array.forEach((elem) => {
    const li = document.createElement("li");
    if (typeof elem === "number") {
      li.innerText = elem;
      mainlist.append(li);
    } else if (typeof elem === "object") {
      const nestedList = document.createElement("ul");
      li.append(nestedList);
      mainlist.append(li);

      elem.forEach((element, index) => {
        const insertedLi = document.createElement("li");
        insertedLi.innerText = elem[index];
        nestedList.append(insertedLi);
      });
    }
  });
}
generateList(array);
