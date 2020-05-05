const submit = document.querySelector("#submit");
const url = document.querySelector("#url");
const topText = document.querySelector("#text-top");
const bottomText = document.querySelector("#text-bottom");
const displayDiv = document.querySelector("#meme-display");
const dltButtons = document.querySelectorAll("button");
const meme = document.querySelectorAll(".meme");

submit.addEventListener("click", function(e) {
    e.preventDefault();

    if (url.value) {
    //create image div & image
    let element = document.createElement("div");
    element.classList.add("meme")
    let img = document.createElement("img");
    img.setAttribute("src", url.value);
    element.append(img);

    //create a delete button
    let remove = document.createElement("button");
    remove.innerHTML = "X";
    remove.tagName = "button"
    element.append(remove);

    //create upper text
    let upperDiv = document.createElement("div");
    upperDiv.classList.add("upper-text")
    upperDiv.innerText = topText.value;
    element.append(upperDiv);

    //create lower text
    let lowerDiv = document.createElement("div");
    lowerDiv.classList.add("lower-text")
    lowerDiv.innerText = bottomText.value;
    element.append(lowerDiv);

    //add all to div
    displayDiv.append(element);
    
    //clear input values
    url.value = "";
    topText.value = "";
    bottomText.value = "";
    }
});

    //delete meme
    displayDiv.addEventListener("click", function(e) {
     if (e.target.tagName === "BUTTON") {
         e.target.parentElement.remove();
     }
});


///// took 3hours and 50min  ended around 5:40
// need to learn if I can add class to buttons (like for hiding buttons unless hovered over picture)
// clearing input values? how do I use the better way?
// problems with publishing on GitHub