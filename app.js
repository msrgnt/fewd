var rentButtons = document.querySelectorAll(".rent");

for (var i = 0; i < rentButtons.length; i++) {
  rentButtons[i].addEventListener("click", checkOut);
}
