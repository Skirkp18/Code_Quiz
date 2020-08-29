var clearBtn = document.getElementById("clear");


var highScoreEl = document.getElementById("savedScores");

function printHighscores() {
  // either get scores from localstorage or set to empty array
 
  // savedHighScores = JSON.parse(savedHighScores);
  

  // (optional) sort highscores by score property in descending order

  // for each score

    // create li tag for each high score



    // display on page
}

function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button
clearBtn.onclick = localStorage.clear();

// run printhighscore when page loads
printHighscores();