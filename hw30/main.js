class SuperMath {
  constructor(x, y, znak) {
    this.obj = { x: x, y: y, znak: znak };
  }

  check(obj) {
    const confirmZnak = confirm(
      `Ви точно хочете зробити ${this.obj.znak} з ${this.obj.x} та ${this.obj.y}?`
    );
    if (confirmZnak === false) {
      const numb1 = +prompt("Ведіть X:");
      const numb2 = +prompt("Ведіть Y:");
      const znak = prompt("Ведіть Znak:");
      this.obj.x = numb1;
      this.obj.y = numb2;
      this.znak = znak;
    }
    switch (this.obj.znak) {
      case "+":
        return this.obj.x + this.obj.y;
        break;
      case "-":
        return this.obj.x + this.obj.y;
        break;
      case "*":
        return this.obj.x * this.obj.y;
        break;
      case "/":
        return this.obj.x / this.obj.y;
        break;
      case "%":
        return this.obj.x % this.obj.y;
        break;
      default:
        console.log(
          `Вибачте, але знак ${this.obj.znak} не є математично вірним`
        );
    }
  }
}
// input() {
//   if (check === false) {
//     const numb1 = +prompt("Ведіть X:");
//     const numb2 = +prompt("Ведіть Y:");
//     const znak = prompt("Ведіть Znak:");
//     this.obj.x = numb1;
//     this.obj.y = numb2;
//     this.znak = znak;
//   }
//   return this.obj;
// }
const asd = new SuperMath(3, 5, "+");
console.log(asd);
asd.check();
