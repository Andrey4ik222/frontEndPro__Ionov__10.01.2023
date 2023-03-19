const bodyElement = document.body;
const textElement = bodyElement.querySelector(".text");
const divGhostElement = bodyElement.querySelector(".div-ghost");

divGhostElement.hidden = true;
textElement.onfocus = function () {
  divGhostElement.hidden = false;
};
textElement.onblur = function () {
  divGhostElement.hidden = true;
};
