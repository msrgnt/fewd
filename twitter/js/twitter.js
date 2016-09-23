var button = document.querySelector(".tweet-button");

button.addEventListener("click", add);

function add(event) {
  var newDiv = document.createElement("div");
  newDiv.textContent = document.querySelector(".new-tweet-text").value;
  // Append the new div to the body
  var body = document.querySelector("section");
  body.appendChild(newDiv);
  event.preventDefault();
}
