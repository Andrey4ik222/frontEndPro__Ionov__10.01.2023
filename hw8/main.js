const yearBirth = +prompt("Введіть ваш рік народження:");

switch (yearBirth) {
  case 0:
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
    break;
}
let cityLive = prompt("Введіть ваше місто проживання:");
switch (cityLive) {
  case null:
    alert("Шкода, що Ви не захотіли ввести своє місто проживання");
}
const sportFavorite = prompt("Введіть ваш улюбленний спорт:");
switch (sportFavorite) {
  case null:
    alert("Шкода, що Ви не захотіли ввести свій улюбленний спорт");
}
const age = 2023 - yearBirth;
let football;
let hockey;
let otherSport;

if (sportFavorite == "Футбол") {
  football = "Круто! Хочеш стати Ліонелем Месі?";
} else if (sportFavorite == "Хокей") {
  hockey = "Круто! Хочеш стати Віктором Тихоновим?";
} else if (sportFavorite == "Баскетбол") {
  alert("Круто! Хочеш стати Майклом Джорданом?");
} else {
  otherSport = `Круто! Мені теж подобается ${sportFavorite}`;
}
switch (cityLive) {
  case "Київ":
    alert(
      `Ти живеш у столиці України, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Варшава":
    alert(
      `Ти живеш у столиці Польщі, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Лондон":
    alert(
      `Ти живеш у столиці Великобританії, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Берлін":
    alert(
      `Ти живеш у столиці Німеччини, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Відень":
    alert(
      `Ти живеш у столиці Австрії, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Мадрід":
    alert(
      `Ти живеш у столиці Іспанії, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Лісабон":
    alert(
      `Ти живеш у столиці Португалії, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Анкара":
    alert(
      `Ти живеш у столиці Туреччини, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Рим":
    alert(
      `Ти живеш у столиці Італії, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Париж":
    alert(
      `Ти живеш у столиці Франції, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  case "Вашингтон":
    alert(
      `Ти живеш у столиці Сполучених Штатів Америки, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
    break;
  default:
    alert(
      `Ти живеш у місті: ${cityLive}, твій вік: ${age}, ${
        football || hockey || otherSport
      }`
    );
}
