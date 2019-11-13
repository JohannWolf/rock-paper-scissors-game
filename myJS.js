function randomComp(get){
    let userSelection = get;
    let compSelection = "";
    let i = Math.floor(Math.random()*30)+1;
    if(i<30 && i>19){
        compSelection="rock";
    }else if(i<20 && i>9){
        compSelection="paper";
    }else {
        compSelection="scissors" ;
    }
    playGame(userSelection,compSelection);
}
function playGame (user,computer){
    if (user===computer){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="Draw!<br> Computer selected "+computer+" too";
    }   else if (user==="rock" && computer === "scissors"){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
    }else if (user==="rock" && computer==="paper"){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
    }else if (user==="scissors" && computer==="rock"){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
    }else if (user==="scissors" && computer==="paper"){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
    }else if (user==="paper" && computer==="rock"){
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
    }else {
        document.getElementById(computer).style.animation ="compAnimation 1.5s infinite";
        document.getElementById(computer).style.animationPlayState="running";
        setTimeout(animationRestart, 1500);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
    }
function animationRestart(){
    document.getElementById(computer).style.animationPlayState="paused";
}
}