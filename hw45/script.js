const url =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

fetch(url)
  .then((response) => {
    console.log(response.ok);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => showWeather(data))
  .catch((error) => {
    console.error(error);
  });

function showWeather(data) {
  const city = data.name;
  const temp = data.main.temp;
  const pressure = data.main.pressure;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const speedWind = data.wind.speed;
  const degWind = data.wind.deg;
  const iconCode = data.weather[0].icon;

  document.getElementById("city").innerHTML = `City: ${city}`;
  document.getElementById("temp").innerHTML = `Temperature: ${temp}°C`;
  document.getElementById("pressure").innerHTML = `Pressure: ${pressure} mm Hg`;
  document.getElementById(
    "description"
  ).innerHTML = `Description: ${description}`;
  document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  document.getElementById(
    "speed-wind"
  ).innerHTML = `Wind speed: ${speedWind}m/s`;
  document.getElementById("deg-wind").innerHTML = `Wind direction: ${degWind}°`;
  document
    .getElementById("icon")
    .setAttribute("src", `http://openweathermap.org/img/w/${iconCode}.png`);
}
