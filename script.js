"use strict";

//Variables for
//Start Button
const startButton = document.querySelector("#start-btn");

//and count div
const countElement = document.querySelector("#count");

//and counter
let counter = 0;

startButton.addEventListener("click", function () {
  counter = 10;
  countElement.hidden = false;
  startButton.hidden = true;

  const intervalId = setInterval(function () {
    counter--;
    console.log(counter);

    if (counter > 0 && counter < 10) {
      countElement.innerHTML = "0" + counter;
    } else {
      countElement.innerHTML = counter;
    }

    if (counter === -1) {
      clearInterval(intervalId);
      countElement.hidden = true;
      startButton.hidden = false;
      counter = 10;
      countElement.innerHTML = counter;
    }
  }, 1000);
});
