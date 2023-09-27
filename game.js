// Iteration 2: Generate 2 random number and display it on the screen

var x = Math.round(Math.random()*100 + 1);
var y = Math.round(Math.random()*100 + 1);
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
number1.innerHTML = x;
number2.innerHTML = y;

// Iteration 3: Make the options button functional

const great = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const less = document.getElementById("lesser-than");

var score = 0;

great.onclick = () => {
    if(number1 > number2 ){
        score++;
        resetTime(timerID);
    }
    else{
        location.href = "./gameover.html";
    }

    x = Math.round(Math.random()*100 + 1);
    y = Math.round(Math.random()*100 + 1);
    number1.innerHTML = x;
    number2.innerHTML = y; 
}

equal.onclick = () => {
    if(number1 == number2){
        score++;
        resetTime(timerID);
    }
    else{
        location.href = "./gameover.html"
    }
    
    x = Math.round(Math.random()*100 + 1);
    y = Math.round(Math.random()*100 + 1);
    number1.innerHTML = x;
    number2.innerHTML = y; 
}

less.onclick = () => {
    if(number1 < number2){
        score++;
        resetTime(timerID);
    }
    else{
        location.href = "./gameover.html"
    }

    
    x = Math.round(Math.random()*100 + 1);
    y = Math.round(Math.random()*100 + 1);
    number1.innerHTML = x;
    number2.innerHTML = y; 
}



 // Iteration 4: Build a timer for the game

 
var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
    time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time = time -1;
        if (time == 0){
            location.href = "./gameover.html";
        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}

startTimer();