var highScoreEl = document.getElementById("highscores");
var clearBtn = document.getElementById("clearbtn");

function printHighscores() {
  // either get scores from localstorage or set to empty array
var highScores = localStorage.getItem("savedScores");
if (highScores !== null) {
var parsedHighScores = JSON.parse(highScores);
} 
else {
  var highScores = [];
}

 
  // (optional) sort highscores by score property in descending order



  // for each score
  for (var i = 0; i < parsedHighScores.length; i++){
    console.log("here");
    // var player = parsedHighScores.player[1];
    // var score = parsedHighScores.score[1];
    // console.log(player);
    // console.log(score);
  
    // create li tag for each high score
    var li = document.createElement("li");
	li.textContent = parsedHighScores[i];
    highScoreEl.append(li);
    // display on page
    highScoreEl.append(li);
  };
  
}

function clearHighscores() {
	localStorage.clear();
	location.reload();
	
}

document.getElementById("clearbtn").addEventListener("click", function() {
	clearHighscores();
});

// run printhighscore when page loads
printHighscores();


	