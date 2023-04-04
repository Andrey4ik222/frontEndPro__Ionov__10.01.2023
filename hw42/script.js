const form = document.querySelector(".form-registration");

const tableName = document.getElementById("table_first-name");
const tableSurname = document.getElementById("table-surname");
const tableGender = document.getElementById("table-gender");
const tableCity = document.getElementById("table-city");
const tableAddress = document.getElementById("table-address");
const tableLanguage = document.getElementById("table-language");

const submitBtn = document.querySelector(".btn-submit");
const formWrapper = document.querySelector(".form-wrapper");
const tableWrapper = document.querySelector(".table-wrapper");

function fillTable(event) {
  event.preventDefault();
  tableName.textContent = form.elements["name"].value;
  tableSurname.textContent = form.elements["surname"].value;
  tableGender.textContent = form.elements.gender.value;
  tableCity.textContent = form.elements.city.value;
  tableAddress.textContent = form.elements.address.value;
  tableLanguage.textContent = "";
  const languages = form.querySelectorAll('[name="language"]:checked');
  for (let i = 0; i < languages.length; i++) {
    tableLanguage.textContent += languages[i].value + " ";
  }
  formWrapper.style.display = "none";
  tableWrapper.style.display = "flex";
}

submitBtn.addEventListener("click", fillTable);
