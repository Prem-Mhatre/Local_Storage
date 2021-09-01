function getScore(){
    score = localStorage.getItem("add_score_game");

    document.getElementById("getting_score").innerHTML = "Score: " + score;
}

function go_to_add_score(){
    window.location = "addScore.html";
}

function deleteScore(){
    localStorage.removeItem("add_score_game");

    document.getElementById("getting_score").innerHTML = "Score is Deleted";
}