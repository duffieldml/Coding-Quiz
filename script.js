// Start with your variables

//Create array for questions to be asked

var timeEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-quiz")

var secondsLeft = 75;
var wrongTime = 10;
var questionEl;

var questionHolder = [];

var questionEl = passwordHolder.join("");
return questionEl;

for (var i = 0; i < questions; i++) {
    var question = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    questionHolder.push(Choices);
  }

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
}


startButton.addEventListener("click", setTime);