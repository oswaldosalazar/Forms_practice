$("#name").on("keyup", function (event) {
  var value = $(this).val();
  $("#output").text(value);
  console.log(value);
});
$("#name").on("click", function (event) {
  $(this).css("background-color", "lightgreen")
  $(this).css("font-size", "30px")
});
