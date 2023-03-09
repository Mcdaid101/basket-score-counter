let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let score = 0; 

button1.addEventListener("click", addScore);
button2.addEventListener("click", addScore2);
button3.addEventListener("click", addScore3);

function addScore() {
    document.getElementById("score").textContent = score++;
}

function addScore2() {
    document.getElementById("score").textContent = score +=2;
}

function addScore3() {
    document.getElementById("score").textContent = score +=3;
}