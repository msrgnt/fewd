// var

var texty = document.querySelector(".new-tweet-text");

texty.addEventListener("keyup", decCount);

function decCount(event) {
var spanny = document.querySelector(".character-limit");
spanny.textContent = 140 - (document.querySelector(".new-tweet-text").value.length);
}
// adds a new div when button is clicked
    // new variables
var button = document.querySelector(".tweet-button");

button.addEventListener("click", add);

function resetNewTweetBox() {
  document.querySelector(".new-tweet-text").value = "";
  document.querySelector(".character-limit").textContent = "140";
}

function add(event) {
  event.preventDefault();

  var newArticle = document.createElement("article");
  var newDiv = document.createElement("div");
  var newImg = document.createElement("img");
  var newSection = document.createElement("section");
  var newDivB = document.createElement("div");
  var newA = document.createElement("a");
  var newParSpanA = document.createElement("span");
  var newSpan = document.createElement("span");
  var newParSpanB = document.createElement("span");

  // brings css and new value into new tweet
  newDiv.setAttribute("class", "old-tweet");
  newImg.setAttribute("src", "img/head4.jpg");
  newSection.setAttribute("class", "tweet-sec");
  newArticle.setAttribute("class", "old-tweet-text");
  newArticle.textContent = document.querySelector(".new-tweet-text").value;
  newDivB.setAttribute("class", "like-stuff");
  newA.setAttribute("class", "like-link");
  newA.textContent = "Like";
  newParSpanA.textContent =" ("
  newSpan.textContent ="0";
  newParSpanB.textContent =")"
  newSpan.setAttribute("class", "like-count");

  // reset
  resetNewTweetBox()

  // attaches new tweet's parts to each other and main
  var body = document.querySelector("main");
  body.appendChild(newDiv);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newSection);
  newSection.appendChild(newArticle);
  newDivB.appendChild(newA);
  newDivB.appendChild(newParSpanA);
  newDivB.appendChild(newSpan);
  newDivB.appendChild(newParSpanB);
  newSection.appendChild(newDivB);

  //prevents new tweet from flashing and not posting

}

// adds another like when like div is clicked
    var li = document.querySelector(".like-stuff");
    var sp = parseInt(document.querySelector(".like-count").textContent);

    li.addEventListener("click", countLike);

    function countLike(event) {
      event.preventDefault();
      sp = sp + 1;
      document.querySelector(".like-count").textContent = sp;
    }
    var li = document.querySelector(".like-stuff");
    var sp = parseInt(document.querySelector(".like-count").textContent);

    li.addEventListener("click", countLike);

    function countLike(event) {
      event.preventDefault();
      sp = sp + 1;
      document.querySelector(".like-count").textContent = sp;
    }
