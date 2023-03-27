const button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const href = btn.getAttribute("data-href");
    if (href.includes("http://") || href.includes("https://")) {
      location.href = href;
    } else {
      location.href = `https://${href}`;
    }
  });
});
