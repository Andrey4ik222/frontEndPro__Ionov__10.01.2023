const yearBirth = +prompt("Введіть ваш рік народження:");

switch (yearBirth) {
  case 0:
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
    break;
}
const cityLive = prompt("Введіть ваше місто проживання:");
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

switch (cityLive) {
  case "Київ":
    alert(`Ти живеш у столиці України, твій вік: ${age}`);
    break;
  case "Варшава":
    alert(`Ти живеш у столиці Польщі, твій вік: ${age}`);
    break;
  case "Лондон":
    alert(`Ти живеш у столиці Великобританії, твій вік: ${age}`);
    break;
  case "Берлін":
    alert(`Ти живеш у столиці Німеччини, твій вік: ${age}`);
    break;
  case "Відень":
    alert(`Ти живеш у столиці Австрії, твій вік: ${age}`);
    break;
  case "Мадрід":
    alert(`Ти живеш у столиці Іспанії, твій вік: ${age}`);
    break;
  case "Лісабон":
    alert(`Ти живеш у столиці Португалії, твій вік: ${age}`);
    break;
  case "Анкара":
    alert(`Ти живеш у столиці Туреччини, твій вік: ${age}`);
    break;
  case "Рим":
    alert(`Ти живеш у столиці Італії, твій вік: ${age}`);
    break;
  case "Париж":
    alert(`Ти живеш у столиці Франції, твій вік: ${age}`);
    break;
  case "Вашингтон":
    alert(`Ти живеш у столиці Сполучених Штатів Америки, твій вік: ${age}`);
    break;
  default:
    alert(`Ти живеш у місті: ${cityLive}, твій вік: ${age}`);
}
if (sportFavorite == "Футбол") {
  alert("Круто! Хочеш стати Ліонелем Месі?");
} else if (sportFavorite == "Хокей") {
  alert("Круто! Хочеш стати Віктором Тихоновим?");
} else if (sportFavorite == "Баскетбол") {
  alert("Круто! Хочеш стати Майклом Джорданом?");
} else {
  alert(`Круто! Мені теж подобается ${sportFavorite}`);
}
