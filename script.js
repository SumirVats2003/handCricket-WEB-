// document.getElementsByClassName("number").addEventListener("click", 
// () => {
//     let run = document.getElementById("number").innerText;
//     document.getElementById("number").innerText
// })

// function display() {
//     document.getElementById
// }

// game variables
let pruns;
let cruns;
let gameOver = false;
let winner = 0; // 0 for tie, 1 for player, 2 for computer
let run;

function generateNumber() {
    let num = Math.floor((Math.random() * 6) + 1);
    document.getElementById("crun").innerText = num;
}
generateNumber();

document.getElementsByClassName("btn").addEventListener("click", ()=> {
    gameOver = true;
}
)

// game loop
while(!gameOver) {
    if (run == num) {
        gameOver = true;
        break;
    }
    
    document.getElementsByClassName("1").addEventListener("click", ()=> {
        run = 1;
    })
    document.getElementsByClassName("2").addEventListener("click", ()=> {
        run = 2;
    })
    document.getElementsByClassName("3").addEventListener("click", ()=> {
        run = 3;
    })
    document.getElementsByClassName("4").addEventListener("click", ()=> {
        run = 4;
    })
    document.getElementsByClassName("5").addEventListener("click", ()=> {
        run = 5;
    })
    document.getElementsByClassName("6").addEventListener("click", ()=> {
        run = 6;
    })
    document.getElementById("prun").innerText = run
    break;
}
