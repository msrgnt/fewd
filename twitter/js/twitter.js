// adds a new div when button is clicked
    // new variables
    var button = document.querySelector(".tweet-button");
    var newArticle = document.createElement("article");
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    var newSection = document.createElement("section");
    var newDivB = document.createElement("div");
    var newA = document.createElement("a");
    var newSpan = document.createElement("span");

    button.addEventListener("click", add);

    function add(event) {

    // brings css and new value into new tweet
    newDiv.setAttribute("class", "old-tweet");
    newImg.setAttribute("src", "img/head4.jpg");
    newSection.setAttribute("class", "tweet-sec");
    newArticle.setAttribute("class", "old-tweet-text");
    newArticle.textContent = document.querySelector(".new-tweet-text").value;
    newDivB.setAttribute("class", "like-stuff");
    newA.setAttribute("class", "like-link");
    newA.textContent = "Like";
    newSpan.textContent =" (0)";
    newSpan.setAttribute("class", "like-count");
    document.querySelector(".new-tweet-text").value = "";

    // attaches new tweet's parts to each other and main
    var body = document.querySelector("main");
    body.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSection);
    newSection.appendChild(newArticle);
    newDivB.appendChild(newA);
    newDivB.appendChild(newSpan);
    newSection.appendChild(newDivB);

    //prevents new tweet from flashing and not posting
    event.preventDefault();

    }
// adds another like when like div is clicked
    var li = document.querySelector(".like-stuff");
    var sp = parseInt(document.querySelector(".like-count").textContent);

    li.addEventListener("click", count);

    function count(event) {
      event.preventDefault();
      sp = sp + 1;
      document.querySelector(".like-count").textContent = sp;
    }
