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
button2.addEventListener('click', startCardTimer);

function startCardTimer() {
  setInterval(GenerateNewCard, 10000);
}

function ResizeCard() {
    const heightInput = document.getElementById("height");
    const widthInput = document.getElementById("width");
    const cardElement = document.querySelector(".card"); 

    const userHeight = parseInt(heightInput.value);
    const userWidth = parseInt(widthInput.value);
    
    const minHeight = parseInt(heightInput.min); 
    const maxHeight = parseInt(heightInput.max); 
    const minWidth = parseInt(widthInput.min);   
    const maxWidth = parseInt(widthInput.max);   
        
        if (userHeight >= minHeight && userHeight <= maxHeight) {
            cardElement.style.height = userHeight + "px";
        } else {
            cardElement.style.height = maxHeight + "px";
            heightInput.value = maxHeight; 
        }

        if (userWidth >= minWidth && userWidth <= maxWidth) {
            cardElement.style.width = userWidth + "px";
        } else {
            cardElement.style.width = maxWidth + "px";
            widthInput.value = maxWidth;
        }
}

let button3 = document.getElementById("SizeButton");
button3.addEventListener('click', ResizeCard);