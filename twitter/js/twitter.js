// counts down when things are typed in .new-tweet-text
var texty = document.querySelector(".new-tweet-text");

texty.addEventListener("keyup", decCount);

function decCount(event) {
var spanny = document.querySelector(".character-limit");
spanny.textContent = 140 - (document.querySelector(".new-tweet-text").value.length);
}
// adds a new div when button is clicked
var button = document.querySelector(".tweet-button");

button.addEventListener("click", add);

//resets shit
function resetNewTweetBox() {
  document.querySelector(".new-tweet-text").value = "";
  document.querySelector(".character-limit").textContent = "140";
}

function add(event) {
  event.preventDefault();
// new variables
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
  newSpan.setAttribute("data-price", "15");
  newSpan.addEventListener("click", countLike);

// reset stuff
  resetNewTweetBox()

// attaches new tweet's parts within .comments div, at the top
  var body = document.querySelector(".comments");
  body.insertBefore( newDiv, body.firstChild );
  newDiv.appendChild(newImg);
  newDiv.appendChild(newSection);
  newSection.appendChild(newArticle);
  newDivB.appendChild(newA);
  newDivB.appendChild(newParSpanA);
  newDivB.appendChild(newSpan);
  newDivB.appendChild(newParSpanB);
  newSection.appendChild(newDivB);

}

// Yes, there's probably a nicer way to do the below. I don't know that nicer
// way yet. SORRY!
// adds likes when top old-tweet's like div is clicked
var li = document.querySelectorAll(".like-count");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", countLike);

  }

function countLike(event){
  var clickedButton = event.target;
  sp = 0;
  sp = sp + 1;
  clickedButton.textContent = sp ;
}
