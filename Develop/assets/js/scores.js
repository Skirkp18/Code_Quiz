var clearBtn = document.getElementById("clear");
var highScoreEl = document.getElementById("highscores");

function printHighscores() {
  // either get scores from localstorage or set to empty array
var highScores = localStorage.getItem("savedScores");
if (highScores !== null) {
var parsedHighScores = JSON.parse(highScores);
} 
else {
  var highScores = [];
  console.log("no scores yet");
}

 
  // (optional) sort highscores by score property in descending order

  
  highScoreEl.innerHTML = ""

  // for each score
  for (var i = 0; i < parsedHighScores.length; i++){
	
  
    // create li tag for each high score
    var li = document.createElement("li");
	li.textContent = parsedHighScores[i];
    highScoreEl.append(li);

    // display on page
    highScoreEl.append(li);
  };
  
}


function clearHighscores() {
  // localStorage.clear();
  console.log("hi Missy");
}

// attache clear event to clear score button
clearBtn.addEventListener("click", clearHighscores());

// run printhighscore when page loads
printHighscores();