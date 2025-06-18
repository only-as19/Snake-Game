const grid = document.querySelector(".grid");

const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("start");

let squares = [];
let currentSnake = [2,1,0]
let direction = 1;
let width = 10;
let appleIndex = 0;
let score = 0;
let intervelTime = 1000;
let speed = 0.9;
let timerId = 0;



function createGrid(){
for (let i = 0; i< 100; i++){
    const square = document.createElement("div");
    square.classList.add("square")
    grid.appendChild(square);
    squares.push(square);

}
}
createGrid()



function controls(a){
    if(a.keyCode===39){
        console.log("KeyRight")
        direction = 1;
    }else if(a.keyCode === 38){
        console.log("keyUp")
        direction = -width;
    }else if(a.keyCode === 37){
        console.log("keyLeft")
        direction = -1
    }else if(a.keyCode === 40){
        console.log("keyDown")
        direction = +width
    }

}