$("#name").on("keyup", function (event) {
  var value = $(this).val();
  $("#output").text(value);
  console.log(value);
});
$("#name").on("click", function (event) {
  $(this).css("background-color", "lightyellow")
  $(this).css("font-size", "40px")
});
$("#output").on("mouseover", function (event) {
  $(this).css("text-transform", "uppercase")
  $(this).css("color", "brown")
});
