let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let button3 = document.getElementById("btn3")
let score = 0; 
let onePoints = 0;
let twoPoints = 0;
let threePoints = 0;

button1.addEventListener("click", () => {
    addScore();
    onePointer();
});

button2.addEventListener("click", () => {
    addScore2();
    twoPointer();
});

button3.addEventListener("click", () => {
    addScore3();
    threePointer();
});

function addScore() {
    document.getElementById("score").textContent = score++;
}

function addScore2() {
    document.getElementById("score").textContent = score +=2;
}

function addScore3() {
    document.getElementById("score").textContent = score +=3;
}

function onePointer() {
    document.getElementById("one-pointer").textContent = onePoints++;
}

function twoPointer() {
    document.getElementById("two-pointer").textContent = twoPoints++;
}

function threePointer() {
    document.getElementById("three-pointer").textContent = threePoints++;
}