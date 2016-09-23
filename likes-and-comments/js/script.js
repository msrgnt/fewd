// your code for comments goes here
var button = document.querySelector(".button");

button.addEventListener("click", newText);

function newText(event) {
  event.preventDefault();

  var newP = document.createElement("p");

  newP.setAttribute("class", "main");
  newP.textContent = document.querySelector(".new-comment-box").value;

  var body = document.querySelector("main");
  body.appendChild(newP);
}

// your code for likes goes here
var link = document.querySelector(".like");
var span = parseInt(document.querySelector(".like-count").textContent);

link.addEventListener("click", add);

function add(event) {
  event.preventDefault();
  span = span + 1;
  document.querySelector(".like-count").textContent = span;
}
