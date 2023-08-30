// DEPENDENCIES (DOM ELEMENTS)
var timerEl = $("#timer");
var questionEl = $("#question");
var startButtonEl = $(".button");
var answersEl = $("#answers");
var scoreEl = $("#score");

// DATA
// set of questions
// questionAnswerObj = {
//   "Arrays in JavaScript can be used to store ___.": [
//     "Numbers and strings",
//     "Other arrays",
//     "Booleans",
//     "All of the above",
//   ],
//   "Commonly used data types DO NOT include:": [
//     "Strings",
//     "Booleans",
//     "Alerts",
//     "Numbers",
//   ],
// };

// create array of objects storing questions and answers
var questionAnswerObj = [
  {
    question: "Strings in JavaScript can be used to store:",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
];

var score = 0;
var currentQuestion = 0;

function displayQuestion(questionIndex) {
  // currentQuestion = Object.keys(questionAnswerObj)[questionIndex];
  if (questionIndex < questionAnswerObj.length) {
    var currentQuestionObj = questionAnswerObj[questionIndex]; //change
    questionEl.text(currentQuestionObj.question);
    answersEl.empty();
    // answer choices
    currentQuestionObj.answers.forEach(function (answer) {
      var answerButton = $("<button>").text(answer);
      answerButton.addClass("btn");

      answerButton.on("click", function () {
        // correct answer
        if (answer === currentQuestionObj.correctAnswer) {
          // scores
          score++;
          scoreEl.text(score);
        } else {
          // timeLeft -= 10;
        }
        currentQuestion++;
        displayQuestion(currentQuestion);
      });
      answersEl.append(answerButton);
    });
  }
}

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
      // localStorage.setItem("Quiz Score", score);
    }
  }, 1000);
}

// USER INTERACTIONS
startButtonEl.on("click", function () {
  countdown();
  // questionIndex++;
  // if (questionIndex < Object.keys(questionAnswerObj).length) {
  startButtonEl.hide();
  displayQuestion(currentQuestion);
});
