import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  GenerateNewCard();

};

function GenerateNewCard() {

  const suits = ["♦", "♥", "♠", "♣"]
  const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"]

  let randomCardSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomCardNumber = cardNumber[Math.floor(Math.random() * cardNumber.length)];

  let selectedCardSuit = document.querySelectorAll("h2")

  selectedCardSuit.forEach((h2) => {

    h2.textContent = randomCardSuit;

    if (randomCardSuit == "♥" || randomCardSuit == "♦") {
      h2.style.color = "red";
    } else if (randomCardSuit == "♠" || randomCardSuit == "♣") {
      h2.style.color = "black";
    }

  });

  let selectedCardNumber = document.querySelector("h1")

  selectedCardNumber.textContent = randomCardNumber;

  if (randomCardSuit == "♥" || randomCardSuit == "♦") {
    selectedCardNumber.style.color = "red";
  } else if (randomCardSuit == "♠" || randomCardSuit == "♣") {
    selectedCardNumber.style.color = "black";
  }

}

let button1 = document.getElementById("noTimerButton");
button1.addEventListener('click', GenerateNewCard);

let button2 = document.getElementById("TimerButton");
button2.addEventListener('click', setInterval(GenerateNewCard, 10000));


function ResizeCard() {

  let height = document.getElementById("height");
  let width = document.getElementById("width");
  let card = document.querySelector(".card");

  let userHeight = parseInt(height.value);
  let userWidth = parseInt(width.value);

  card.style.height = userHeight + "px";
  card.style.width = userWidth + "px";

}

let button3 = document.getElementById("SizeButton");
button3.addEventListener('click', ResizeCard);