// Start with your variables

var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-quiz");
var startEl = document.querySelector("#start");
var quizEl  = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var highscoreEl = document.querySelector("#high-score");

//Variables to be used by functions later in the document
var userScore = 0;
var secondsLeft = 75;
var wrongTime = 10;
var askQuestionIndex = 0;

function setTime() {
    //Set the initial time 
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      stopTest();
    }
  }, 1000);
};

function subtractTime () {
    //Subtract time for every wrong answer
    secondsLeft = secondsLeft - wrongTime;
    //Make sure timer cannot go negative
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
}

function stopTest () {
    clearInterval(timerInterval);

    //hide quiz section to make room for high scores
    quizEl.setAttribute("class", "hide");

    //Bring up section for users final score, time taken

    //Bring up forms for player to enter initials for score keeping

    //Fuction for saving scores to local storage

    //Bring user to the high score page

}

function populateQuestions() {
    //Grab questions from questions.js
    var askQuestions = questions[askQuestionIndex];
    var titleEl = document.getElementById("question-holder");
    //add questions and answers to page
    titleEl.textContent = askQuestions.title;

    choicesEl.innerHTML = "";

    askQuestions.choices.forEach(function(choice, i){
        var choicesNode = document.createElement("button");
        choicesNode.setAttribute("class", "choice");
        choicesNode.setAttribute("value", choice);
        choicesNode.textContent = i + 1 + "." + choice;
        choicesNode.onclick = answerChoice;
        choicesEl.appendChild(choicesNode);
    });

}

function answerChoice () {
    //Checking player answer against the correct answer
    if (this.value !== questions[askQuestionIndex].answer) {
        subtractTime();
        resultEl.textContent = "Incorrect!";
    } else {
        resultEl.textContent = "Correct!";
    }
    askQuestionIndex++;
    //Make it so it will cycle through the questions
    if (askQuestionIndex === questions.length) {
        stopTest();
    } else {
        populateQuestions();
    }

}

// function Quizstart () {
//     startEl.setAttribute("class", "hide");
//     quizEl.setAttribute("class", "show");
//     setTime();
//     populateQuestions();
// }

//Condition for starting the quiz
startButton.addEventListener("click", function Quizstart () {
    startButton.setAttribute("class", "hide")
    quizEl.setAttribute("class", "show");
    setTime();
    populateQuestions();
});
