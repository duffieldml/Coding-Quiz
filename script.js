// Start with your variables

//Create array for questions to be asked

var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-quiz");
var startEl = document.querySelector("#start");
var quizEl  = document.querySelector("#quiz");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");

var userScore = 0;
var secondsLeft = 75;
var wrongTime = 10;
var askQuestionIndex = 0;

function setTime() {
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
    secondsLeft = secondsLeft - wrongTime;
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
}

function stopTest () {

}

function populateQuestions() {
    var askQuestions = questions[askQuestionIndex];
    var titleEl = document.getElementById("question-holder");
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
    if (this.value !== questions[askQuestionIndex].answer) {
        subtractTime();
        resultEl.textContent = "Incorrect!";
    } else {
        resultEl.textContent = "Correct!";
    }
    askQuestionIndex++;
    if (askQuestionIndex === questions.length) {
        //stopTest();
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


startButton.addEventListener("click", function Quizstart () {
    startButton.setAttribute("class", "hide")
    quizEl.setAttribute("class", "show");
    setTime();
    populateQuestions();
});
