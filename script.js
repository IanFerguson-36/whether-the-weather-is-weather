var searchForm = $("#search-form");
var citySearchEl = $("#city-search");
var currentCity = $("#currently-selected");
var tempElement = $("<p>");
var humidityElement = $("<p>");
var windspeedElement = $("<p>");
var uvElement = $("<p>");
var history = JSON.parse(localStorage.getItem("history") || []);

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

      // Displays Windspeed

      // Displays UV Index
    });
});

// inside click event
// history.push(current city)
// localstorage.setitem("history, json.stringify(histroy)))
