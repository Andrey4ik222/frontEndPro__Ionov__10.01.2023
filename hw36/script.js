const body = document.body;
const img = document.createElement("img");
body.prepend(img);
const random = Math.floor(Math.random() * 9) + 1;
img.setAttribute("src", `images/${random}.jpg`);
