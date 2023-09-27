// Iteration 5: Store the player score and display it on the game over screen
let hyo = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board");
var playAgain = document.getElementById("play-again-button");

scoreBoard.innerHTML = hyo;
playAgain.onclick = () => {
    location.href = "./index.html";
}