// 1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showData() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owners = [];
  }
  addOwner(ownerData) {
    if (ownerData.age >= 18) {
      this.owners.push(ownerData);
    } else {
      console.log("Unfortunately, you are too young to drive a car(");
    }
  }
  showInformationAboutCar() {
    console.log(
      `brand: ${this.brand}, model: ${this.model}, year of issue: ${this.year}`
    );
    this.owners.forEach((owner) => owner.showData());
  }
}
const humanFirst = new Human("Bob", 21);
const humanSecond = new Human("Jane", 17);
const humanThird = new Human("Nick", 35);

const carFirst = new Car("BMW", "m5", 2018);
const carSecond = new Car("Mersedes", "e63", 2004);
const carThird = new Car("Audi", "rs6", 2019);

carFirst.addOwner(humanFirst);
carSecond.addOwner(humanSecond);
carThird.addOwner(humanThird);

carFirst.showInformationAboutCar();
carSecond.showInformationAboutCar();
carThird.showInformationAboutCar();
