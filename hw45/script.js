const cityWhereToShowWeather = "Lviv";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWhereToShowWeather}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

function getDataFromAPI(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getDataFromAPI(url);

function showWeather(data) {
  const {
    name,
    main: { temp, pressure, humidity },
    weather: [{ description, icon }],
    wind: { speed, deg },
  } = data;

  setInnerHTML("city", `City: ${name}`);
  setInnerHTML("temp", `Temperature: ${temp}°C`);
  setInnerHTML("pressure", `Pressure: ${pressure} mm Hg`);
  setInnerHTML("description", `Description: ${description}`);
  setInnerHTML("humidity", `Humidity: ${humidity}%`);
  setInnerHTML("speed-wind", `Wind speed: ${speed}m/s`);
  setInnerHTML("deg-wind", `Wind direction: ${deg}°`);
  document
    .getElementById("icon")
    .setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
}
function setInnerHTML(id, text) {
  document.getElementById(id).innerHTML = text;
}
