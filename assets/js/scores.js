var highscores = JSON.parse(localStorage.getItem("highscores")) || []
var highscoreEl = document.getElementById("highscores")

for (var index = 0; index < highscores.length; index++) {
    var score = document.createElement("p")
    score.textContent = highscores[index].initials + ": " + highscores[index].score
    highscoreEl.appendChild(score)
}