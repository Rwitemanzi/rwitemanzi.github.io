// Store a reference to the <h1> in a variable
//const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
//myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wild-giraffe.png") {
    myImage.setAttribute("src", "images/trees.jpg");
  } else {
    myImage.setAttribute("src", "images/wild-giraffe.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to the Wildlife Animals and ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the Wildlife Animals and ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
