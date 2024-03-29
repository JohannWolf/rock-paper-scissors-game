/*Global variables set to zero on load*/
let countWin=0;
let countLose=0;
let r=0;
/*constant for mediaquerie*/
const mqSmall = window.matchMedia("(max-width:768px)");
/*function asking for players name*/
function requestName(){
    let txt = prompt("Player Name:","Player 1");
    if(txt==null || txt==" "){
        document.getElementById("playerName").innerHTML ="Player1";
    }else {
        document.getElementById("playerName").innerHTML =txt;
    }
}
/*starts on click of start and end game or when count round is 7*/
function restartGame(click){
    /*if start is clicked everything is visible, set to 0 and request a name*/
    if (click==="start"){
        countLose=0;
        document.getElementById("playerCount").innerHTML=countLose;
        countWin=0;
        document.getElementById("computerCount").innerHTML=countWin;
        document.getElementById("iconsPlayer").style.display="block";
        document.getElementById("iconsComputer").style.display="block";
        document.getElementById("result").style.fontSize="20px";
        document.getElementById("result").innerHTML="";
        r=0;
    }else{
        /*if end is clicked or round is 7 then calls function to show the final result*/
        if(countWin > countLose){
            showResult("You Win!");
        }else if(countWin < countLose){
            showResult("You Lose!");
        }else{
            showResult("Draw!");
        }
    }
}
/*function that shows the final result and hides icons*/
function showResult(whoWins){
        document.getElementById("result").innerHTML=whoWins;
        if(mqSmall.matches){
            document.getElementById("result").style.fontSize="25px";
        }else{
            document.getElementById("result").style.fontSize="50px"; 
        }
        document.getElementById("iconsPlayer").style.display="none";
        document.getElementById("iconsComputer").style.display="none";
}
/*function to calculate the computers slection*/
function randomComp(get){/*gets comes from html*/
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
    /*function to count rounds with delay to allow time for animation*/
    roundCount();
    /*function to compare the selction of user vs computer*/
    playGame(userSelection,compSelection);
}
/*this function compares the selections and activates the animation*/
function playGame (user,computer){
    if (user===computer){
        /*function to apply animation*/
        funcForAnimation(computer);
        /*round result is shown*/
        document.getElementById("result").innerHTML="Draw!<br> Computer selected "+computer+" too";
    }   else if (user==="rock" && computer === "scissors"){
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
        /*win count increses when user wins and is added to the score*/
        ++countWin;
        document.getElementById("playerCount").innerHTML=countWin;
    }else if (user==="rock" && computer==="paper"){
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
        /*lose count increses when user loses and is added to the score*/
        ++countLose;
        document.getElementById("computerCount").innerHTML=countLose;
    }else if (user==="scissors" && computer==="rock"){
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
        ++countLose;
        document.getElementById("computerCount").innerHTML=countLose;
    }else if (user==="scissors" && computer==="paper"){
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
        ++countWin;
        document.getElementById("playerCount").innerHTML=countWin;
    }else if (user==="paper" && computer==="rock"){
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Win!<br>"+ user + " beats "+ computer;
        ++countWin;
        document.getElementById("playerCount").innerHTML=countWin;
    }else {
        funcForAnimation(computer);
        document.getElementById("result").innerHTML="You Lose!<br>"+ computer + " beats "+ user;
        ++countLose;
        document.getElementById("computerCount").innerHTML=countLose;
    }
}
/*function to count the rounds*/
function roundCount(){
    ++r;
    if(r==7){
        setTimeout(restartGame,1800);
    }
}
/*function to apply animation*/
function funcForAnimation(funcTarget){
        document.getElementById(funcTarget).classList.add("animClass");
        setTimeout(classRemover,1100,funcTarget);
    }
function classRemover(funcTarget){
    document.getElementById(funcTarget).classList.remove("animClass");
}