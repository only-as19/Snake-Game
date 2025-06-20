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

function startGame(){
    currentSnake.forEach(index => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(timerId);
    currentSnake = [2,1,0];
    score = 0;
    scoreDisplay.textContent = score;
    direction = 1;
    intervelTime = 1000;
    generateApples();
    currentSnake.forEach(index => squares[index].classList.add("snake"))
    timerId = setInterval(move,intervelTime)
}

currentSnake.forEach( index => squares[index].classList.add("snake"));

function move(){
    if(
       ( currentSnake[0] - width < 0 && direction === -width ) ||
       ( currentSnake[0] % width === width - 1 && direction === 1 ) ||
       ( currentSnake[0] + width >= width*width && direction === width) ||
       ( currentSnake[0] % width === 0 && direction === -1 ) ||
       squares[currentSnake[0] + direction].classList.contains("snake")
    )
    return clearInterval(timerId);
    



    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
    squares[currentSnake[0]].classList.add("snake");


    
}


function createGrid(){
for (let i = 0; i< 100; i++){
    const square = document.createElement("div");
    square.classList.add("square")
    grid.appendChild(square);
    squares.push(square);

}
}
createGrid()



function generateApples(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length)
    }while (squares[appleIndex].classList.contains("apple"))
        squares[appleIndex].classList.add("apple")

}

generateApples()


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