// code for comments goes here
var button = document.querySelector(".button");

button.addEventListener("click", makeComment);

function makeComment(event) {
  event.preventDefault();

  var newP = document.createElement("p");
  newP.setAttribute("class", "comment");

  newP.textContent = document.querySelector(".new-comment-box").value;
  // reset new-comment-box value to no text after submit
  document.querySelector(".new-comment-box").value = "";

  var body = document.querySelector(".comments");
  body.appendChild(newP);
}

// code for likes goes here
var link = document.querySelector(".like");
var span = parseInt(document.querySelector(".like-count").textContent);

link.addEventListener("click", likeCounter);

function likeCounter(event) {
  event.preventDefault();
  span = span + 1;
  document.querySelector(".like-count").textContent = span;
}
