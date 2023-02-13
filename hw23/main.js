function Car(name) {
  this.name = name;
}

function CarSpecial(name) {
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
  drive: usualPossibilites.drive,
  breake: usualPossibilites.breake,
  turn: usualPossibilites.turn,
  lamboDoor: function () {
    console.log("I have Lambo doors!");
  },
};

Car.prototype = usualPossibilites;
CarSpecial.prototype = specialPossibilite;

const audi = new Car("Audi");
const bmw = new Car("BMW");
const mersedes = new Car("Mersedes");
const bugatti = new Car("Bugatti");
const lambo = new CarSpecial("Lambo");

console.log(audi);
console.log(bmw);
console.log(mersedes);
console.log(bugatti);
console.log(lambo);
