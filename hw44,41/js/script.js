const categories = [
  {
    id: 0,
    name: "iPhone",
    category: "iphone",
  },
  {
    id: 1,
    name: "MacBook",
    category: "macbook",
  },
  {
    id: 2,
    name: "iPad",
    category: "ipad",
  },
];

const items = [
  {
    id: 0,
    name: "iPhone 14 pro",
    description:
      "Екран (6.1, OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16",
    price: 49999,
    category: "iphone",
  },
  {
    id: 1,
    name: "iPhone 14 pro max",
    description:
      "Екран (6.7, OLED (Super Retina XDR), 2796x1290) / Apple A16 Bionic / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16",
    price: 54999,
    category: "iphone",
  },
  {
    id: 2,
    name: "MacBook Air 13 M1",
    description:
      "Екран 13.3 Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий",
    price: 44449,
    category: "macbook",
  },
  {
    id: 3,
    name: "MacBook Air 13.6 M2",
    description:
      "Екран 13.6 Liquid Retina (2560x1664), глянсовий / Apple M2 / RAM 8 ГБ / SSD 256 ГБ / Apple M2 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Monterey / 1.24 кг / золотий",
    price: 47999,
    category: "macbook",
  },
  {
    id: 4,
    name: "iPad Pro 11 M2",
    description:
      "Экран 11 Liquid Retina (2388x1668) MultiTouch / Apple M2 / 128 ГБ встроенной памяти / Wi-Fi / Bluetooth 5.3 / основная двойная камера 12 Мп + 10 Мп, фронтальная - 12 Мп / iPadOS 16 / 466 г / космический серый",
    price: 41499,
    category: "ipad",
  },
];

const listCategories = document.querySelector(".list-categories");
const listProducts = document.querySelector(".list-products");
const infoProducts = document.querySelector(".info-products");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".close");

function createCategories() {
  categories.forEach(({ id, name, category }) => {
    const categoriesItem = document.createElement("div");
    categoriesItem.classList.add("categories-item");
    categoriesItem.classList.add(`${category}-category`);
    categoriesItem.innerHTML = name;
    listCategories.append(categoriesItem);
  });
}
export function createProduct() {
  items.forEach(({ id, name, description, price, category }) => {
    const item = document.createElement("div");
    item.classList.add("product-item");
    item.classList.add(`item-${id}`);
    listProducts.append(item);
    if (category === "iphone") {
      item.classList.add("item-iphone");
    } else if (category === "macbook") {
      item.classList.add("item-macbook");
    } else if (category === "ipad") {
      item.classList.add("item-ipad");
    }

    const itemImage = document.createElement("img");
    itemImage.classList.add("product-item__image");
    item.append(itemImage);
    itemImage.src = `./assets/${id}.jpeg`;

    const itemName = document.createElement("h2");
    itemName.classList.add("product-item__name");
    item.append(itemName);
    itemName.innerHTML = name;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("product-item__price");
    item.append(itemPrice);
    itemPrice.innerHTML = `${price} ₴`;
  });
  return document.querySelectorAll(".product-item");
}

function chooseItem(event) {
  const items = document.querySelectorAll(".product-item");
  const target = event.target;

  for (let item of items) {
    if (target.classList.contains("iphone-category")) {
      item.style.display = item.classList.contains("item-iphone")
        ? "flex"
        : "none";
    } else if (target.classList.contains("macbook-category")) {
      item.style.display = item.classList.contains("item-macbook")
        ? "flex"
        : "none";
    } else if (target.classList.contains("ipad-category")) {
      item.style.display = item.classList.contains("item-ipad")
        ? "flex"
        : "none";
    }
  }
  const formWrapper = document.querySelector(".form-wrapper");
  const itemDescription = document.querySelectorAll(".info-products-item");
  itemDescription.forEach((elem) => {
    elem.style.display = "none";
  });
  formWrapper.style.display = "none";
}

function createInfo() {
  items.forEach(({ id, name, description, price, category }) => {
    const descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("info-products-item");
    infoProducts.prepend(descriptionWrapper);
    descriptionWrapper.setAttribute("id", id);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("info-products__description");
    descriptionWrapper.append(itemDescription);
    itemDescription.innerHTML = description;

    const itemButtonBuy = document.createElement("button");
    itemButtonBuy.classList.add("product-item__button");
    itemButtonBuy.classList.add(`buy-btn--${id}`);
    descriptionWrapper.append(itemButtonBuy);
    itemButtonBuy.innerHTML = "Купити";
  });
}

function showInfo(event) {
  const formWrapper = document.querySelector(".form-wrapper");
  for (let i = 0; i < items.length; i++) {
    const elem = document.getElementById(i);
    if (
      event.target.classList.contains(`item-${i}`) ||
      event.target.parentNode.classList.contains(`item-${i}`)
    ) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
      formWrapper.style.display = "none";
    }
  }
}

window.addEventListener("load", createCategories);
window.addEventListener("load", createProduct);
window.addEventListener("load", createInfo);

listCategories.addEventListener("click", chooseItem);
listProducts.addEventListener("click", showInfo);

// Homework 41

const formWrapper = document.querySelector(".form-wrapper");

const orderForm = document.forms[0];
const namelable = document.getElementById("name");
const surnameLable = document.getElementById("surmane");
const patronymicLable = document.getElementById("patronymic");
const postStore = document.getElementById("post-store");
const countProduct = document.getElementById("countProd");
const country = document.getElementById("country");
const payInfo = document.forms[0].pay;
const buttonSubmit = document.querySelector(".btn-submit");

function validationForm(event) {
  const errMes = document.createElement("div");
  errMes.classList.add("validation-error-messege");
  formWrapper.append(errMes);
  let errorMessage = "";

  if (namelable.value === "" || namelable.value.includes(" ")) {
    errorMessage += "Заповніть поле ім'я.\n";
    namelable.style.border = "1px solid red";
  }

  if (surnameLable.value === "" || surnameLable.value.includes(" ")) {
    errorMessage += "Заповніть поле прізвище.\n";
    surnameLable.style.border = "1px solid red";
  }

  if (patronymicLable.value === "" || patronymicLable.value.includes(" ")) {
    errorMessage += "Заповніть поле по-батькові.\n";
    patronymicLable.style.border = "1px solid red";
  }

  if (postStore.value > 200 || postStore.value < 1) {
    errorMessage += "Введіть номер складу від 1 до 200\n";
    postStore.style.border = "1px solid red";
  }

  if (countProduct.value < 1) {
    errorMessage += "Кількість товару не може буди меньше ніж 1\n";
    countProduct.style.border = "1px solid red";
  }
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");

  if (errorMessage !== "") {
    const errMes = document.querySelector(".validation-error-messege");
    if (errMes) {
      errMes.innerHTML = "<h2>" + errorMessage + "</h2>\n";
    } else {
      const newErrMes = document.createElement("div");
      newErrMes.classList.add("validation-error-messege");

      formWrapper.append(newErrMes);
      newErrMes.innerHTML = "<h2>" + errorMessage + "</h2>\n";
    }
    event.preventDefault();
  } else {
    const btnBuyId0 = document.querySelector(".buy-btn--0");
    const btnBuyId1 = document.querySelector(".buy-btn--1");
    const btnBuyId2 = document.querySelector(".buy-btn--2");
    const btnBuyId3 = document.querySelector(".buy-btn--3");
    const btnBuyId4 = document.querySelector(".buy-btn--4");

    let nameProduckt = "";
    if (btnBuyId0.parentElement.style.display === "block") {
      nameProduckt += items[0].name;
    } else if (btnBuyId1.parentElement.style.display === "block") {
      nameProduckt += items[1].name;
    } else if (btnBuyId2.parentElement.style.display === "block") {
      nameProduckt += items[2].name;
    } else if (btnBuyId3.parentElement.style.display === "block") {
      nameProduckt += items[3].name;
    } else if (btnBuyId4.parentElement.style.display === "block") {
      nameProduckt += items[4].name;
    }

    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Ім'я:${namelable.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Прізвище: ${surnameLable.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Кількість товару: ${countProduct.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Місто доставки: ${country.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Номер відділення: ${postStore.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Cпосіб оплати: ${payInfo.value}</p>`
    );
    modalContent.insertAdjacentHTML(
      "beforeend",
      `<p>Товар: ${nameProduckt}</p>`
    );
    modal.style.display = "flex";
    event.preventDefault();
  }
  return errorMessage;
}

orderForm.addEventListener("submit", validationForm);

namelable.addEventListener("input", function () {
  namelable.style.border = "1px solid black";
});

surnameLable.addEventListener("input", function () {
  surnameLable.style.border = "1px solid black";
});

patronymicLable.addEventListener("input", function () {
  patronymicLable.style.border = "1px solid black";
});

postStore.addEventListener("input", function () {
  postStore.style.border = "1px solid black";
});

countProduct.addEventListener("input", function () {
  countProduct.style.border = "1px solid black";
});

function openForm(event) {
  if (event.target.classList.contains("product-item__button")) {
    const formWrapper = document.querySelector(".form-wrapper");
    formWrapper.style.display = "block";
  }
}

function closeModal(event) {
  if (event.target === buttonClose || event.target === modal) {
    modal.style.display = "none";
    orderForm.submit();
  }
}

infoProducts.addEventListener("click", openForm);

modal.addEventListener("click", closeModal);

buttonSubmit.addEventListener("click", function (event) {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
    orderForm.submit();
  } else return;
});
