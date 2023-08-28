// DEPENDENCIES (DOM ELEMENTS)
var timerEl = $("#timer");
var mainEl = $("main");
var startButtonEl = $("#button");

// DATA
questionAnswerObj = {
  "Arrays in JavaScript can be used to store ___.": [
    "Numbers and strings",
    "Other arrays",
    "Booleans",
    "All of the above",
  ],
  "Commonly used data types DO NOT include:": [
    "Strings",
    "Booleans",
    "Alerts",
    "Numbers",
  ],
};

// variable to access indices in Object
questionIndex = 0;
// set of questions
// answer choices
// scores

// FUNCTIONS
// timer function
function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
      timerEl.text(`Time: ${timeLeft}`);
    } else if (timeLeft <= 1) {
      timerEl.text("Time is up!");
      clearInterval(timeInterval);
    }
  }, 1000);
}

function displayQuestion() {
  questionEl = $("#question");
  currentQuestion = Object.keys(questionAnswerObj)[questionIndex];
  questionEl.text(currentQuestion);
}

// USER INTERACTIONS
startButtonEl.on("click", function () {
  countdown();
  questionIndex++;
  if (questionIndex < Object.keys(questionAnswerObj).length) {
    displayQuestion();
  }
  startButtonEl.hide();
});

// INITIALIZATIONS
