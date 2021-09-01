var score = 0;

function addScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore(){
    localStorage.setItem("add_score_game", score);
}

function go_to_watch_score(){
    window.location = "WatchScore.html";
}