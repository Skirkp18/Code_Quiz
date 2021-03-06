""// variables to keep track of quiz state
var currentQuestionIndex = 0;
var timerId = 50;
var score = 50;
var finalScore = 0;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  document.querySelector("#start-screen").setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.setAttribute("class", "");

  getQuestion();
  startTimer();
}

function startTimer() {
  // start timer
  timerInterval = setInterval(function () {
    timerId--;
    // show starting time
    timerEl.textContent = timerId;

    // console.log(timerId);

    if (timerId <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = 0;
      quizEnd();
    }

  }, 1000);

}

function getQuestion() {
  // get current question object from array
  currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  document.getElementById("question-title").innerHTML = currentQuestion["title"];

  // clear out any old question choices
  document.getElementById("choices").innerHTML = "";

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {

    // create new button for each choice
    var button = document.createElement("button");

    // attach click event listener to each choice

    button.addEventListener("click", function (event) {
      element = event.target.innerHTML;
      questionClick();
    });

    // display on the page

    button.textContent = currentQuestion.choices[i];

    choicesEl.appendChild(button);
  }
}

function questionClick() {

  // check if user guessed wrong
  if (element !== currentQuestion.answer) {

    // console.log("wrong");

    // penalize time
    clockTick();
    score = score - 10;

    //  display on screen

    startTimer();

    // play "wrong" sound effect
    sfxWrong.play();

  }
  // else 
  else {

    // play "right" sound effect

    sfxRight.play();
  }


  // flash right/wrong feedback on page for half a second
  if (element !== currentQuestion.answer) {
    feedbackEl.textContent = "Wrong! Minus 10 Seconds";
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "feeback hide")
    }, 1000);
  }
  else {
    feedbackEl.textContent = "Correct! Good Job";
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "feeback hide")
    }, 1000);
  }

  // move to next question

  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex >= questions.length) {

    // quizEnd
    quizEnd();
  }
  // else 
  else {

    // getQuestion
    getQuestion();
  }

}


function quizEnd() {

  // stop timer
  clearInterval(timerInterval);

  // show end screen
  document.querySelector("#end-screen").setAttribute("class", "");

  // show final score
  if (timerId <= 0) {
    timerEl.textContent = 0;
  }
  else {
   finalScore = score + timerId;
  }

  document.querySelector("#final-score").textContent = finalScore;
  // hide questions section

  document.querySelector("#questions").setAttribute("class", "hide");

}

function clockTick() {
  // update time
  clearInterval(timerInterval);
  timerId = timerId - 10;
}

function saveHighscore(event) {
  event.preventDefault();

  // get value of input box
  var initialsInput = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initialsInput === "") {
    alert("must enter initials");
    return;
  }
  // get saved scores from localstorage, or if not any, set to empty array
  savedHighScores = localStorage.getItem("savedScores");
  savedHighScoresObj = JSON.parse(savedHighScores);
  if (savedHighScores === null) {
    savedHighScoresObj = [];
  }
  

  // format new score object for current user
   newScore = initialsInput + " " + finalScore;
	
  // save to localstorage
  savedHighScoresObj.push(newScore);

  localStorage.setItem("savedScores", JSON.stringify(savedHighScoresObj));



  // redirect to next page
  location.href = "highscores.html";
 
}

function checkForEnter() {
	
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitBtn.click();
}
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
