console.log("Hello World!");
var today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
var b = 0;
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
        "The current forecast calls for " +
          response.list[0].weather[0].description
      );
      console.log(
        "The current temperature is " + response.list[0].main.temp + "F"
      );
      console.log("Low:" + response.list[0].main.temp_min + "F");
      console.log("High:" + response.list[0].main.temp_max + "F");
      console.log(
        "Humidity currently at " + response.list[0].main.humidity + "%"
      );
      console.log(
        "Wind is moving at a speed of:" + response.list[0].wind.speed + "mph"
      );

      // store query data
      $("#search").on("click", function () {
        var city = $("#searchInput").val();
        var cityButtonEl = $("<button>");
        cityButtonEl.text(city);
        cityButtonEl.attr("id", "button" + city);
        b = b + 1;
        cityButtonEl.attr("class", "btn-light btn-lg btn-block");
        $("#searchCol").append(cityButtonEl);
        console.log("clicked search button");
        localStorage.setItem("cityName" + city, city);
        currentWeather(city);
      });

      $("#current").text(response.name + " (" + date + ") ");
      var icon = response.weather[0].icon;
      $("#weather-icon").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("temperature").text(
        parseInt((response.list.main.temp - 273.15) * 1.8) + 32
      );
      $("#humidity").text(response.list.main.humidity + "%");
      $("#wind-speed").text(response.list.wind.speed + "mph");
      // var cityLat = response.coord.let;
      // var cityLon = response.coord.lon;

      $("#button" + city).on("click", function () {
        console.log("you clicked me");
        localStorage.getItem("cityName" + city);
        currentWeather(city);
      });
      var queryUVindex =
        "https://api.openwathermap.org/data/2.5/uvi/forecast?lat=" + city + "&lon=" + city + "&appid=c25eda49392ed989a410cf267c3525ce";
      $.ajax({
        url: queryUVindex,
        method: "GET",
      }).then(function (responseUV) {
        var UVindex = responseUV[0].value;
        console.log(UVindex);
        UVEl.remove();
        UVEl = $("<button>");
        UVEl.text(UVindex);
        UVEl.attr("class", "btn-success");
        $("#UV-index").append(UVEl);

        if (UVindex >= 3 && UVindex <= 6) {
          UVEl.attr("class", "btn-warning");
        } else if (UVindex > 6) {
          UVEl.attr("class", "btn-danger");
        }
      });

      //     var results = response.cod;
      //     for (var i = 0; i < results.length; i++) {
      //         var weatherDiv = $("<div>")
      //         var p = $("<p>").text("weather: " + results[i].description);
      //         var weatherImage = $("<img>");
      //         weatherImage.attr("src", results[i]);

      //         weatherDiv.append(p);
      //         weatherDiv.append(weatherImage);

      //         $("#weather").prepend(weatherDiv);
      //     }
      //   });
    });
  });
});
