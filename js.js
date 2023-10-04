let score=document.getElementById("score");

function random_timer() {
    return Math.floor(Math.random() * 2000);
}

function random() {
    return Math.floor(Math.random() * 9);
}

function random_mole() {
    document.getElementsByClassName("mole")[random()].style.display="initial";
    setTimeout(random_mole, random_timer());
}

function read_score() {
    return parseInt(score.textContent);
}

function modify_score(nbr) {
    let new_score = read_score()+nbr;
    if(new_score<0) {
        score.innerHTML=0;
    } else {
        score.innerHTML=new_score;
    }
}

function mole_clicked(id) {
    let mole=document.getElementsByClassName("mole")[id];
    modify_score(1);
    mole.style.display="none";
}

function wrong_click() {
    modify_score(-2);
}

function cursor(x, y) {
    let cursor=document.getElementById("cursor");
    cursor.style.top=y-25+"px";
    cursor.style.left=x-25+"px";
}

setTimeout(random_mole, 3000);

// pb de responsive
// taupe apparaissent aleatoirement parmi les inactives
// taupe qui se barre
// fin de jeu