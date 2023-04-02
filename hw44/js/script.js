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
  const itemDescription = document.querySelectorAll(".info-products-item");
  for (elem of itemDescription) {
    elem.style.display = "none";
  }
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
    descriptionWrapper.append(itemButtonBuy);
    itemButtonBuy.innerHTML = "Купити";
  });
}

function showInfo(event) {
  for (let i = 0; i < items.length; i++) {
    const elem = document.getElementById(i);
    console.log(elem);
    elem.style.display =
      event.target.classList.contains(`item-${i}`) ||
      event.target.parentNode.classList.contains(`item-${i}`)
        ? "block"
        : "none";
  }
}

function buyItem(event) {
  if (event.target.classList.contains("product-item__button")) {
    modal.style.display = "flex";
  }
}
function hideElements() {
  const items = document.querySelectorAll(".product-item");
  const itemsInfo = document.querySelectorAll(".info-products-item");
  items.forEach((elem) => {
    elem.style.display = "none";
  });
  itemsInfo.forEach((elem) => {
    elem.style.display = "none";
  });
}

function closeModal() {
  modal.style.display = "none";
  hideElements();
}

window.addEventListener("load", createCategories);
window.addEventListener("load", createProduct);
window.addEventListener("load", createInfo);

listCategories.addEventListener("click", chooseItem);
listProducts.addEventListener("click", showInfo);
infoProducts.addEventListener("click", buyItem);

modal.addEventListener("click", closeModal);
buttonClose.addEventListener("click", closeModal);
