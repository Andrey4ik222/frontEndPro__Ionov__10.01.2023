// 1. Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'
const userName = prompt("Enter your name:");
let time = prompt("Enter timeout:");
if (time.indexOf("minute" || "minutes") !== -1) {
  time = 60 * 1000 * Number.parseInt(time, 10);
} else if (time.indexOf("second" || "seconds") !== -1) {
  time = 1000 * Number.parseInt(time, 10);
} else if (time.indexOf("hour" || "hours") !== -1) {
  time = 60 * 60 * 1000 * Number.parseInt(time, 10);
} else {
  console.log("Pleace, enter a valid value");
}
setTimeout(
  (name) => {
    if (typeof time === "number") {
      console.log(`Hi, ${name}!`);
    }
  },
  time,
  userName
);

// 2. Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан
const Obj1 = {
  name: "Bob",
  age: 23,
};
const Obj2 = {
  name: "Jane",
  age: 18,
};
const result = JSON.stringify(Obj2);
function cheking(Obj) {
  try {
    return JSON.parse(Obj);
  } catch {
    return JSON.stringify(Obj);
  }
}
console.log(cheking(result));
console.log(cheking(Obj1));

// 3. Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку
function chekingJsonString(string) {
  try {
    JSON.parse(string);
    return true;
  } catch {
    return false;
  }
}
