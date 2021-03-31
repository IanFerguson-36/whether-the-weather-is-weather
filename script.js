var searchForm = $("#search-form");
var citySearchEl = $("#city-search");
var currentCity = $("#currently-selected");
var tempElement = $("<p>");
var humidityElement = $("<p>");
var windspeedElement = $("<p>");
var uvElement = $("<p>");
var humidityElement = $("<p>");
var windspeedElement = $("<p>");
var uvElement = $("<p>");

searchForm.on("submit", function (event) {
  event.preventDefault();
  var citySearch = citySearchEl.val();
  console.log(citySearch);
  var apiKey = "2810f23e0f72acb2e940047beb55e002";

  var apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // Displays Current city
      currentCity.text(data.name);

      // Displays Current Temperature
      tempElement.text("Temperature " + data.main.temp);
      currentCity.append(tempElement);

      //   Displays Humidity
      humidityElement.text("Humidity " + data.main.humidity);
      currentCity.append(humidityElement);

      // Displays Windspeed
      windspeedElement.text("Windspeed " + data.wind.speed);
      currentCity.append(windspeedElement);
      // Displays UV Index
      var lat = data.coord.lat;
      var lon = data.coord.lon;
    });
});
function uvIndex() {
  var uvURL =
    "http://api.openweathermap.org/data/2.5/uvi?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid" +
    apiKey;

  fetch(uvURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
