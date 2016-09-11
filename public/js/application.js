$(document).ready(function() {
 flipButton();
});

function flipButton() {
  console.log("yayyyyy");
$(".flipper1").on("click", ".flip-button", function() {
  $(".flip-container1").toggleClass("flip-me1");
});
}
function flipButton() {
$(".flipper").click(".flip-button", function() {
  console.log("yayyyy");
  $(".flip-container").toggleClass("flip-me");
});
}
