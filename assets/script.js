// DEPENDENCIES (DOM ELEMENTS)
var timerEl = $("#timer");
var questionEl = $("#question");
var startButtonEl = $(".button");
var answersEl = $("#answers");
var scoreEl = $("#score");

// DATA
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
  {
    question: "The condition in an if/else statement is enclosed within:",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correctAnswer: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
    correctAnswer: "Console.log",
  },
  {
    question:
      "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
  },
];

var score = 0;
var currentQuestion = 0;
var timeLeft = 60;

// FUNCTIONS
function displayQuestion(questionIndex) {
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
          score += 3;
          scoreEl.text(score);
        } else {
          timeLeft -= 10;
        }
        currentQuestion++;
        displayQuestion(currentQuestion);
      });
      answersEl.append(answerButton);
    });
  }
  if (currentQuestion === questionAnswerObj.length) {
    endQuiz();
    timeLeft = 0;
    timerEl.text("");
    questionEl.text("Quiz Completed!");
  }
}

// timer function
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
      timerEl.text(`Time: ${timeLeft}`);
    } else if (timeLeft <= 1) {
      clearInterval(timeInterval);
      endQuiz();
      timerEl.text("");
      questionEl.text("Time is up!");
    }
  }, 1000);
  return timeLeft;
}
// end quiz function
function endQuiz() {
  // hide answers container
  answersEl.empty();
  // display score
  scoreEl.text("Final Score: " + score);
  // store score in local storage
  localStorage.setItem("Quiz Score", score);
}

// USER INTERACTIONS
startButtonEl.on("click", function () {
  countdown();
  startButtonEl.hide();
  displayQuestion(currentQuestion);
});
