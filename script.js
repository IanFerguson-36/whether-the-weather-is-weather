var searchForm = $("#search-form");
var citySearchEl = $("#city-search");

searchForm.on("submit", function (event) {
  event.preventDefault();
  var citySearch = citySearchEl.val();
  console.log(citySearch);
  var apiKey = "2810f23e0f72acb2e940047beb55e002";

  var apiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    citySearch +
    "&appid=" +
    apiKey;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
