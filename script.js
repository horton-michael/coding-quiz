// DEPENDENCIES (DOM ELEMENTS)
var timerEl = document.getElementById("timer");
var mainEl = document.getElementsByClassName("main");

// DATA

// FUNCTIONS
// timer function
function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
      timerEl.textContent = `Time: ${timeLeft}`;
    } else if (timeLeft <= 1) {
      timerEl.textContent = "Time is up!";
      clearInterval(timeInterval);
    }
  }, 1000);
}

// USER INTERACTIONS

// INITIALIZATIONS
countdown();
