console.log("Hello World!");
$(document).ready(function () {
  console.log("ready");
  $("#search").on("click", function (event) {
    event.preventDefault();
    var city = $("#searchInput").val();
    console.log(city);
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=c25eda49392ed989a410cf267c3525ce";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.city);
      console.log(
        "The current forecast calls for " + response.weather[0].description
      );
      console.log("The current temperature is " + response.main.temp + "F");
      console.log("Low:" + response.main.temp_min + "F");
      console.log("High:" + response.main.temp_max + "F");
      console.log("Humidity currently at " + response.main.humidity + "%");
      console.log(
        "Wind is moving at a speed of:" + response.wind.speed + "mph"
      );
    });
  });
});
// });
