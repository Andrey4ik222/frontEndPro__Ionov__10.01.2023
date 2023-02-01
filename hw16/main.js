const deleteNumber = +prompt("Введіть число яке, потрібно видалити з масиву");
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
  return array.filter((elem) => elem != item);
}
const resultArray = removeElement(array, deleteNumber);
console.log(resultArray);
