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
function createProduct() {
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
  return (
    document.querySelectorAll(".btn-basket"),
    document.querySelectorAll(".product-item")
  );
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
      (event.target.classList.contains(`item-${i}`) ||
        event.target.parentNode.classList.contains(`item-${i}`)) &&
      !event.target.classList.contains("btn-basket")
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

// ========================== Homework 41

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

    const buttonSubmitForm = document.querySelector(".btn-submit");

    let nameProduckt = "";
    if (btnBuyId0.parentElement.style.display === "block") {
      nameProduckt += items[0].name;
      buttonSubmitForm.classList.add("buy-item--0");
    } else if (btnBuyId1.parentElement.style.display === "block") {
      nameProduckt += items[1].name;
      buttonSubmitForm.classList.add("buy-item--1");
    } else if (btnBuyId2.parentElement.style.display === "block") {
      nameProduckt += items[2].name;
      buttonSubmitForm.classList.add("buy-item--2");
    } else if (btnBuyId3.parentElement.style.display === "block") {
      nameProduckt += items[3].name;
      buttonSubmitForm.classList.add("buy-item--3");
    } else if (btnBuyId4.parentElement.style.display === "block") {
      nameProduckt += items[4].name;
      buttonSubmitForm.classList.add("buy-item--4");
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

const now = new Date();
const year = now.getFullYear();
const month = ("0" + (now.getMonth() + 1)).slice(-2);
const day = ("0" + now.getDate()).slice(-2);
const formattedDate = `${year}-${month}-${day}`;

infoProducts.addEventListener("click", openForm);

buttonSubmit.addEventListener("click", function (event) {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
    orderForm.submit();
  } else return;
});

function closeModal(event) {
  if (event.target === buttonClose || event.target === modal) {
    modal.style.display = "none";
    orderForm.submit();
  }
}
modal.addEventListener("click", closeModal);

// ========================== Homework 43

const buttonOrders = document.querySelector(".btn-orders");
const ordersWrapper = document.querySelector(".orders-wrapper");
const closeOrdersButton = document.querySelector(".close-orders");
const ordersDetails = document.querySelector(".orders-description");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

function addItemToOrderList() {
  if (buttonSubmit.classList.contains("buy-item--0")) {
    orders.push({
      name: items[0].name,
      price: items[0].price,
      id: items[0].id,
      data: formattedDate,
      nameClient: namelable.value,
      surnameClient: surnameLable.value,
      postNumber: postStore.value,
      countProduct: countProduct.value,
      payInfo: payInfo.value,
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders;
  } else if (buttonSubmit.classList.contains("buy-item--1")) {
    orders.push({
      name: items[1].name,
      price: items[1].price,
      id: items[1].id,
      data: formattedDate,
      nameClient: namelable.value,
      surnameClient: surnameLable.value,
      postNumber: postStore.value,
      countProduct: countProduct.value,
      payInfo: payInfo.value,
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders;
  } else if (buttonSubmit.classList.contains("buy-item--2")) {
    orders.push({
      name: items[2].name,
      price: items[2].price,
      id: items[2].id,
      data: formattedDate,
      nameClient: namelable.value,
      surnameClient: surnameLable.value,
      postNumber: postStore.value,
      countProduct: countProduct.value,
      payInfo: payInfo.value,
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders;
  } else if (buttonSubmit.classList.contains("buy-item--3")) {
    orders.push({
      name: items[3].name,
      price: items[3].price,
      id: items[3].id,
      data: formattedDate,
      nameClient: namelable.value,
      surnameClient: surnameLable.value,
      postNumber: postStore.value,
      countProduct: countProduct.value,
      payInfo: payInfo.value,
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders;
  } else if (buttonSubmit.classList.contains("buy-item--4")) {
    orders.push({
      name: items[4].name,
      price: items[4].price,
      id: items[4].id,
      data: formattedDate,
      nameClient: namelable.value,
      surnameClient: surnameLable.value,
      postNumber: postStore.value,
      countProduct: countProduct.value,
      payInfo: payInfo.value,
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    return orders;
  }
}

function displayOrders() {
  buttonOrders.style.display = "none";
  listCategories.style.display = "none";
  listProducts.style.display = "none";
  infoProducts.style.display = "none";
  ordersWrapper.style.display = "block";

  const orderInLocalStorage = localStorage.getItem("orders");
  const ordersInObj = JSON.parse(orderInLocalStorage);
  if (orders.length == 0) {
    return;
  }
  ordersInObj.forEach((order) => {
    const item = items.find((item) => item.id === order.id);
    const itemOrderWrapper = document.createElement("div");
    const orderDateils = document.createElement("div");
    orderDateils.classList.add("orders-dateils");

    const cancelOrderButton = document.createElement("button");
    cancelOrderButton.classList.add("btn-cancel-order");
    cancelOrderButton.classList.add(`${order.id}-product`);
    cancelOrderButton.textContent = "✖";

    const itemOrder = document.createElement("p");
    itemOrder.classList.add(`info-order-product-${order.id}`);
    itemOrder.classList.add("info-order-product-all");

    itemOrder.textContent = `Товар: ${item.name}. Ціна товару: ${item.price} грн. Дата замовлення: ${order.data}. Ім'я замовника: ${order.nameClient}. Прізвище замовника: ${order.surnameClient}. Почтове відділення номер ${order.postNumber}. Кількість товару: ${order.countProduct}. Оплата ${order.payInfo}`;

    orderDateils.append(itemOrder);
    itemOrderWrapper.append(orderDateils);
    itemOrderWrapper.append(cancelOrderButton);
    ordersDetails.append(itemOrderWrapper);
  });
}

function deleteItemInOrders(event) {
  const target = event.target;
  if (target.classList.contains("0-product")) {
    const updatedOrders = orders.filter((order) => order.id !== 0);
    const updatedOrdersJSON = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedOrdersJSON);
    location.reload();
  } else if (target.classList.contains("1-product")) {
    const updatedOrders = orders.filter((order) => order.id !== 1);
    const updatedOrdersJSON = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedOrdersJSON);
    location.reload();
  } else if (target.classList.contains("2-product")) {
    const updatedOrders = orders.filter((order) => order.id !== 2);
    const updatedOrdersJSON = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedOrdersJSON);
    location.reload();
  } else if (target.classList.contains("3-product")) {
    const updatedOrders = orders.filter((order) => order.id !== 3);
    const updatedOrdersJSON = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedOrdersJSON);
    location.reload();
  } else if (target.classList.contains("4-product")) {
    const updatedOrders = orders.filter((order) => order.id !== 4);
    const updatedOrdersJSON = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedOrdersJSON);
    location.reload();
  }
}
orderForm.addEventListener("submit", addItemToOrderList);

ordersWrapper.addEventListener("click", deleteItemInOrders);
closeOrdersButton.addEventListener("click", () => {
  location.reload();
});

buttonOrders.addEventListener("click", displayOrders);
