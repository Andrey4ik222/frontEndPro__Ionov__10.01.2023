function Car(name) {
  this.name = name;
}

const usualPossibilites = {
  drive: function () {
    console.log("I can drive!");
  },
  breake: function () {
    console.log("I can breake!");
  },
  turn: function () {
    console.log("I can turn!");
  },
  door: function () {
    console.log("I have doors!");
  },
};

const specialPossibilite = {
  lamboDoor: function () {
    console.log("I have Lambo doors!");
  },
};

Car.prototype = usualPossibilites;

const audi = new Car("Audi");
const bmw = new Car("BMW");
const mersedes = new Car("Mersedes");
const bugatti = new Car("Bugatti");
const lambo = new Car("Lambo");

lambo.door = specialPossibilite;

console.log(audi);
console.log(bmw);
console.log(mersedes);
console.log(bugatti);
console.log(lambo);
