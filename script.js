"use strict";

//Variables for
//Start Button
const startButton = document.querySelector("#start-btn");

//and count div
const countElement = document.querySelector("#count");

//and counter
let counter = 0;

startButton.addEventListener("click", function () {
  counter = 65;
  countElement.innerHTML = formatCountAsString(counter);

  countElement.hidden = false;
  startButton.hidden = true;

  const intervalId = setInterval(function () {
    counter--;

    //Umwandlung in Minuten
    const minutes = Math.floor(counter / 60);
    //und Sekunden
    const seconds = counter % 60;
    countElement.innerHTML = formatCountAsString(counter);

    if (counter === -1) {
      clearInterval(intervalId);

      countElement.hidden = true;
      startButton.hidden = false;
    }
  }, 1000);
});

function formatCountAsString(counterInSeconds) {
  //Umwandlung in Minuten
  const minutes = Math.floor(counterInSeconds / 60);
  //und Sekunden
  let seconds = counterInSeconds % 60;
  seconds = ("0" + seconds).slice(-2);
  return minutes + ":" + seconds;
}
