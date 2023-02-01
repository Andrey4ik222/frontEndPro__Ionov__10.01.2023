const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKey(length, characters) {
  let randomKey = "";
  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomLetters = characters[randomIndex];
    randomKey += randomLetters;
  }
  return randomKey;
}
const countChar = +prompt("якої довжини має бути ключ?");
console.log(generateKey(countChar, characters));
