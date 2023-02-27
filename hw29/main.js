class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static sizeSmall = {
    name: "SIZE_SMALL",
    price: 50,
    calories: 20,
  };

  static sizeBig = {
    name: "SIZE_BIG",
    price: 100,
    calories: 40,
  };

  static stuffingCheese = {
    name: "STUFFING_CHEESE",
    price: 10,
    calories: 20,
  };

  static stuffingSalad = {
    name: "STUFFING_SALAD",
    price: 20,
    calories: 5,
  };

  static stuffingPotato = {
    name: "STUFFING_POTATOE",
    price: 15,
    calories: 10,
  };

  static toppingSauce = {
    name: "TOPPING_SAUCE",
    price: 15,
    calories: 0,
  };

  static toppingMayo = {
    name: "TOPPING_MAYO",
    price: 20,
    calories: 5,
  };

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  // calculatorCalories() {
  //   const sizeCalories = this.size.calories;
  //   const packCalories = this.stuffing.calories;
  //   const fullCalories = this.toppings.reduce(
  //     (acc, current) => acc + current.calories,
  //     0
  //   );
  //   return sizeCalories + packCalories + fullCalories;
  // }

  calculateCalories() {
    const toppingCalories = this.toppings.reduce((acc, curr) => {
      acc + curr.calories;
    }, 0);
  }
  // calculateCalories() {
  //   const toppingCalories = this.toppings.reduce(
  //     (total, topping) => total + topping.calories,
  //     0
  //   );
  //   return this.size.calories + this.stuffing.calories + toppingCalories;
  // }

  calculatePrice() {
    const toppingPrice = this.toppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
    return this.size.price + this.stuffing.price + toppingPrice;
  }
}

const hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories:", hamburger.calculateCalories());
console.log("Price:", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce:", hamburger.calculatePrice());
