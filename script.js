const player_numbers = document.querySelectorAll("#player .number");
const ai_numbers = document.querySelectorAll("#ai .number");
const winnerDiv = document.querySelector("#winner");
const aiChoice = document.querySelector(".computer-choice");
const playerChoice = document.querySelector(".player-choice");
const playBtn = document.querySelector(".play-btn");

// game variables
let pruns = 0;
let cruns = 0;
let gameOver = false;
let run;

const generateNumber = () => {
  let num = Math.floor(Math.random() * 6 + 1);
  return num;
};

for (let i = 0; i < player_numbers.length; i++) {
  player_numbers[i].addEventListener("click", () => {
    if (gameOver) return;
    run = parseInt(player_numbers[i].innerText);
    let num_generated = generateNumber();
    if (run === num_generated) {
      gameOver = true;
      if (pruns > cruns) {
        winner.innerText = "Player Wins";
      } else if (pruns < cruns) {
        winner.innerText = "Computer Wins";
      } else {
        winner = "Draw";
      }
      return
    }
    pruns += run;
    document.getElementById("prun").innerText = pruns;
    cruns += num_generated;
    const crun_div = document.querySelector(`#crun`);
    crun_div.innerText = cruns;
    playerChoice.innerText = "Player Choose: " + run;
    aiChoice.innerText = "Computer Choose: " + num_generated;
  });
}

playBtn.addEventListener("click", () => {
  gameOver = false;
  pruns = 0;
  cruns = 0;
  document.getElementById("prun").innerText = pruns;
  document.getElementById("crun").innerText = cruns;
  playerChoice.innerText = "";
  aiChoice.innerText = "";
  winnerDiv.innerText = "";
});
