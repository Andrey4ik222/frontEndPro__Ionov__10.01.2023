class SuperMath {
  check(obj) {
    const { x, y, znak } = obj;

    let result;

    switch (znak) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      case "%":
        result = x % y;
        break;
      default:
        alert(`Вибачте, але дія ${znak} не є математично вірною`);
        return this.input();
    }
    const confirmSign = confirm(`Ви точно хочете зробити ${x} ${znak} ${y}?`);

    if (confirmSign === false) {
      this.input();
    } else {
      console.log(`${x} ${znak} ${y} = ${result}`);
    }
  }

  input() {
    const x = +prompt("Введіть X:");
    const y = +prompt("Введіть Y:");
    const znak = prompt("Введіть дію:");
    this.check({ x, y, znak });
  }
}

const exampleInstance = new SuperMath();
const testObj = { x: 2, y: 4, znak: "+" };
exampleInstance.check(testObj);
