function getAdder() {
  let result = 0;
  return function (numb) {
    result += numb;
    return result;
  };
}
const sum = getAdder();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
