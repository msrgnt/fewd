var form = document.querySelector("#new-item-form");

function formSubmitted(event) {
  event.preventDefault();

  // Your code goes here...

  form.reset();
}

form.addEventListener("submit", formSubmitted);
