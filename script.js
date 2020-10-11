console.log("Hello World!");
$(document).ready(function () {
  console.log("ready");
  $("#search").on("click", function (event) {
    event.preventDefault();
var city = $("#searchInput").val()
    var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=c25eda49392ed989a410cf267c3525ce";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
