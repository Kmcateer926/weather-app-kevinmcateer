console.log("Hello World!");
$(document).ready(function () {
  console.log("ready");
  $("#searchInput").on("click", function (event) {
    event.preventDefault();

    var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=Athens&appid=c25eda49392ed989a410cf267c3525ce";
    $.ajax({
      Url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
