// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let imageIndex = 1;

function nextImage() {
  showImages((imageIndex += 1));
}
function previousImage() {
  showImages((imageIndex -= 1));
}
function showImages(index) {
  const images = document.getElementsByClassName("img");
  if (index === images.length) {
    btnNext.hidden = true;
  } else if (index === 1) {
    btnPrev.hidden = true;
  } else {
    btnNext.hidden = false;
    btnPrev.hidden = false;
  }
  for (let img of images) {
    img.style.display = "none";
  }
  images[imageIndex - 1].style.display = "block";
}
showImages(imageIndex);
btnNext.addEventListener("click", nextImage);
btnPrev.addEventListener("click", previousImage);
