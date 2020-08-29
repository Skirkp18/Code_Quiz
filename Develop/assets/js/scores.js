var clearBtn = document.getElementById("clear");
var highScoreEl = document.getElementById("highscores");

function printHighscores() {
  // either get scores from localstorage or set to empty array
var highScores = localStorage.getItem("savedScores");
if (highScores !== null) {
var parsedHighScores = JSON.parse(highScores);
console.log(parsedHighScores);
} else {
  var highScores = [];
  console.log("no scores yet");
}

 
  // (optional) sort highscores by score property in descending order

  console.log(parsedHighScores.length);

  // highScoreEl.innerHTML = ""

  // for each score
  for (var i = 0; i < parsedHighScores.length; i++){
    console.log("here");
    // var player = parsedHighScores.player[1];
    // var score = parsedHighScores.score[1];
    // console.log(player);
    // console.log(score);
  
    // create li tag for each high score
    var li = document.createElement("li");
    highScoreEl.append(parsedHighScores);

    // display on page
    highScoreEl.append(li)
  }
  
}

function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button
// clearBtn.onclick = localStorage.clear();

// run printhighscore when page loads
printHighscores();