let counter=document.getElementById("score");
let score=0;
let play=false;

function begin_game() {
    play=true;
    setTimeout(display_random_mole, 3000);
    setTimeout(end_game, 60000);
    document.getElementById("black_screen").style.display="none";
}

function display_random_mole() {
    if(play) {
        let mole = document.getElementsByClassName("mole")[Math.floor(Math.random() * 9)];
        mole.style.display="initial";
        setTimeout(display_random_mole, Math.floor(Math.random() * 2000));
        setTimeout(function(){mole.style.display="none"}, 3000);
    }
}

function mole_clicked(id) {
    let mole=document.getElementsByClassName("mole")[id];
    modify_score(1);
    mole.style.display="none";
}

function modify_score(nbr) {
    if(score+nbr<0) {
        score=0;
    } else {
        score+=nbr;
    }
    counter.innerText=score;
}

function cursor(x, y) {
    let cursor=document.getElementById("cursor");
    cursor.style.top=y-25+"px";
    cursor.style.left=x-25+"px";
}

function end_game() {
    play=false;
    document.getElementById("black_screen").style.display=null;
    document.getElementById("popup").innerText=`Tu as obtenu un score de ${score} !
    Rafraîchis la page pour rejouer :)`;
}