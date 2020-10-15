console.log("Hello World!");
var today = new Date();
var date =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
// var b = 0;

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
      // console.log(response);
      // console.log(response.city);
      // console.log(
      //   "The current forecast calls for " +
      //     response.list[0].weather[0].description
      // );
      // console.log(
      //   "The current temperature is " + response.list[0].main.temp + "F"
      // );
      // console.log("Low:" + response.list[0].main.temp_min + "F");
      // console.log("High:" + response.list[0].main.temp_max + "F");
      // console.log(
      //   "Humidity currently at " + response.list[0].main.humidity + "%"
      // );
      // console.log(
      //   "Wind is moving at a speed of:" + response.list[0].wind.speed + "mph"
      // );
      JSON.stringify(response.city.name);
      $(".city").attr("style", "<h3>").text(city);
      // $(".current-day").text(moment().format('L'));
      $("#weather-icon").attr(
        "src",
        "https://openweathermap.org/img/wn/" +
          response.list[0].weather[0].icon +
          "@2x.png"
      );
      $(".description").text(
        "Forecast: " + response.list[0].weather[0].description
      );
      $(".wind").text("Wind Speed: " + response.list[0].wind.speed + "mph");
      $(".humidity").text("Humidity: " + response.list[0].main.humidity + "%");
      $(".temp").text(
        "temp: " +
          parseInt((response.list[0].main.temp - 273.15) * 1.8 + 32 + "F")
      );
      // $(".temp").text("High: " + response.list[0].main.temp_max + "F");
      // "Low: " + response.list[0].main.temp_min + "F"
      // var tempF = (response.last[0].main.temp - 273.15) * 1.8 + 32;
     
        // UVEl.remove();
        // UVEl = $("<button>");
        // UVEl.text(UVindex);
        // UVEl.attr("class", "btn-success");
        // $("#UV-index").append(UVEl);

        // if (UVindex >= 3 && UVindex <= 6) {
        //   UVEl.attr("class", "btn-warning");
        // } else if (UVindex > 6) {
        //   UVEl.attr("class", "btn-danger");
        // }
      // });

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

      // $("#current").text(response.name + " (" + date + ") ");
      // var icon = response.list[0].weather[0].icon;
      // $("#weather-icon").attr(
      //   "src",
      //   "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      // );
      // $("temperature").text(
      //   "temp: " +
      //     parseInt((response.list[0].main.temp - 273.15) * 1.8 + 32 + "F")
      // );

      // $("#humidity").text(response.list.main.humidity + "%");
      // $("#wind-speed").text(response.list.wind.speed + "mph");
      // var cityLat = response.coord.let;
      // var cityLon = response.coord.lon;

      $("#button" + city).on("click", function () {
        console.log("you clicked me");
        localStorage.getItem("cityName" + city);
        currentWeather(city);
      });
      var queryFiveDay =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=c25eda49392ed989a410cf267c3525ce";
      console.log(queryFiveDay);
      $.ajax({
        url: queryFiveDay,
        method: "GET",
      }).then(function (responseFiveDay) {
        console.log(responseFiveDay);
        // $("#card1").text(
        //   moment().add(1, "days"),
        //   responseFiveDay.list[1].weather[0].icon,
        //   responseFiveDay.list[1].main.temp.toFixed(2),
        //   responseFiveDay.list[1].wind.speed + "mph",
        //   responseFiveDay.list[1].main.humidity
        // );
        //   console.log(responseFiveDay.list[1].main.temp);
        //   console.log(responseFiveDay.list[1].main.humidity);
        //   console.log(responseFiveDay.list[1].weather[0].icon);
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
        // });
    });
  });
});
 var lat = response.city.lat;
      var lon = response.city.lon;
      $(".temp").text();
      var queryUVindex =
        "https://api.openwathermap.org/data/2.5/uvi/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=c25eda49392ed989a410cf267c3525ce";
      $.ajax({
        url: queryUVindex,
        method: "GET",
      }).then(function (responseUV) {
        var UVindex = responseUV[0].value;
        console.log(UVindex);
        var uvIndexDiv = $(".uv-index").text("UVIndex " + UVindex);
      });