// 1. Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано
function checkTodayData(millisec) {
  const dateToday = new Date();
  const date = new Date(millisec);
  if (
    date.getDate() === dateToday.getDate() &&
    date.getMonth() === dateToday.getMonth() &&
    date.getFullYear() === dateToday.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTodayData(new Date()));
console.log(checkTodayData(1627283833332));

// 2. Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
function returnDate(millisec) {
  const date = new Date(millisec);
  const fullDate =
    date.getDate() +
    "." +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "." +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    ("0" + date.getMinutes()).slice(-2);
  return fullDate;
}
console.log(returnDate(Date.now()));

// 3. Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.
function differenceInTime(millisec) {
  const atTheMomentTime = Date.now();
  if (atTheMomentTime > millisec) {
    return `Прошло ${atTheMomentTime - millisec} миллисекунд`;
  } else if (atTheMomentTime < millisec) {
    return `Должно пройти ${millisec - atTheMomentTime} миллисекунд`;
  } else {
    return `Ваше время - сейчас!`;
  }
}
console.log(differenceInTime(1633403992));
