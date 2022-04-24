'use strict';
const messageLabel = document.querySelector(".message");
const inputLabel=document.querySelector(".guess");
const againBtn=document.querySelector(".again");
const checkBtn=document.querySelector(".check");
const scoreLabel=document.querySelector(".score");
const highScoreLabel=document.querySelector(".highscore");
const numberLabel=document.querySelector(".number");

let numbers=0;
let score=20;
let highscore=0;
showHighScore();

function randomNumberGenerate(){
    return  Math.floor(Math.random()*20)+1;
}

 let answer=randomNumberGenerate();
 

function checkTextbox(element){
    numbers = element.value;
    if(numbers < 1 || numbers>20){
        messageLabel.innerHTML = "Enter a number between 1 and 20";
    }else{
        if(numbers<answer){
            messageLabel.innerHTML = "Too Low";
            score--;
            scoreLabel.innerHTML = score;
        }else if(numbers>answer){
            messageLabel.innerHTML = "Too High";
            score--;
            scoreLabel.innerHTML = score;
        }else if(score==0){
            messageLabel.innerHTML = "Game Over";
            checkBtn.disabled = true;
            againBtn.disabled = false;
        }else if(numbers==answer){
            let body = document.querySelector('body');
            body.style.backgroundColor = "green";
            numberLabel.innerHTML = answer; 
            messageLabel.innerHTML = "🏆🚀 Bingo 👍🎵🛵";
            checkBtn.disabled = true;
            againBtn.disabled = false;
            scoreLabel.innerHTML = score;
            checkHighScore(score);
            
        }
    }
}


againBtn.addEventListener("click",()=>{
    let body = document.querySelector('body');
    body.style.backgroundColor = "#222";
    answer=randomNumberGenerate();
    checkBtn.disabled=false;
    againBtn.disabled=true;
    numberLabel.innerHTML="?";
    messageLabel.innerHTML = "Start guessing...";
    inputLabel.value="";
    score=20;
    scoreLabel.innerHTML = score;
});


function saveHighScore(score){
    localStorage.setItem("highscore",score);
}


function checkHighScore(score){
    const highScore=JSON.parse(localStorage.getItem("highscore"));
    if(score > highScore){
        saveHighScore(score);
        showHighScore();
    }
}


function showHighScore(){
    const highScore=localStorage.getItem("highscore");
    if(highScore==null){
        highScoreLabel.innerHTML=0;
    }else{
        highScoreLabel.innerHTML=highScore;
    }
}

