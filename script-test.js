// DOM ELEMENTS
timerEl = $("#timer");
mainEl = $("main");
startButtonEl = $(".btn");
questionEl = $("#question");
answerEl = $("#answers");
listEl = $("#container").children("ul");

// DATA

// FUNCTIONS

// create coding quiz challenge
// create a timer
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
// create a start button
// function to create start button element and append to main element
function createStartButton() {
  var startButtonEl = $("<button>");
  startButtonEl.text("Start Quiz");
  mainEl.append(startButtonEl);
}
// create questions
// create list of questions and answers in an object
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
// create a variable to access indices in object
questionIndex = 0;

// create a function to display questions
function displayQuestion() {
  currentQuestion = Object.keys(questionAnswerObj)[questionIndex];
  questionEl.text(currentQuestion);
}
// create a function to display answers within buttons
function displayAnswers() {
  currentAnswers = Object.values(questionAnswerObj)[questionIndex];
  for (var i = 0; i < currentAnswers.length; i++) {
    var answerButtonEl = $("<button>");
    answerButtonEl.text(currentAnswers[i]);
    listEl.append(answerButtonEl);
  }
}
// function displayAnswers() {
//   currentAnswers = Object.values(questionAnswerObj)[questionIndex];
//   answerEl.text(currentAnswers);
// }
// create a variable to access indices in object
answerIndex = 0;
// create a function to check answers based on click event with correct answer as index
function checkAnswer() {
  currentAnswers = Object.values(questionAnswerObj)[questionIndex];
  correctAnswer = currentAnswers[answerIndex];
  answerEl.on("click", function (event) {
    event.preventDefault();
    answer = event.target.textContent;
    if (answer === correctAnswer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  });
}

// function checkAnswer() {
//   currentAnswers = Object.values(questionAnswerObj)[questionIndex];
//   answerEl.text(currentAnswers);
//   correctAnswer = currentAnswers[answerIndex];
//   answerEl.on("click", function (event) {
//     event.preventDefault();
//     answer = event.target.textContent;
//     if (answer === correctAnswer) {
//       console.log("correct");
//     } else {
//       console.log("incorrect");
//     }
//   });
// }

// create buttons for answers
// create a function to create buttons for answers
// function createAnswerButtons() {
//   var answerButtonEl = $("<button>");
//   answerButtonEl.text("Answer");
//   mainEl.append(answerButtonEl);
// }

// create a score
function score() {
  var score = 0;
  if (answer === correctAnswer) {
    score++;
  }
}
// create a high score
// function to track high score in local storage
function highScore() {
  localStorage.setItem("highScore", score);
}

// USER INTERACTIONS
// create a click event for start button to start timer and display questions and answers
startButtonEl.on("click", function () {
  countdown();
  questionIndex++;
  if (questionIndex < Object.keys(questionAnswerObj).length) {
    displayQuestion();
    displayAnswers();
    checkAnswer();
  }
  startButtonEl.hide();
});

// startButtonEl.on("click", function (event) {
//   event.preventDefault();
//   // init timer
//   countdown();
//   // display question
//   if (questionIndex < Object.keys(questionAnswerObj).length) {
//     displayQuestion();
//   }

//   // increase question index
//   questionIndex++;
//   startButtonEl.hide();
// });

// INITIALIZATION

// write function to display question and answers based on click event and timer, and have a way to store the correct answer for the question. then compare correct answer to user answer and increase score if correct. then display next question and answers. then repeat until all questions are answered or timer runs out. then display score and have a way to store high score in local storage. then display high score.