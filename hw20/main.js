function exponentiation(num, degree) {
  if (degree === 1) {
    return num;
  } else {
    return num * exponentiation(num, degree - 1);
  }
}
const number = +prompt("Number:");
const degree = +prompt("Degree:");
console.log(exponentiation(number, degree));
