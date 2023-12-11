function makeBubble() {
  let items = "";
  for (let i = 1; i < 109; i++)
    items += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;

  document.querySelector("#winbtm").innerHTML = items;
}
let score = 0;
let timer = 60;
let hitnum = 0;
function runTimer() {
  let timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      document.querySelector(
        "#winbtm"
      ).innerHTML = `<h1>Game Over. Your Score is ${score}</h1>`;
      clearInterval(timeInterval);
    }
  }, 1000);
}

function getNextHit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#winbtm").addEventListener("click", function (details) {
  if (Number(details.target.textContent) === hitnum) {
    increaseScore();
    getNextHit();
    makeBubble();
  }
});

makeBubble();
runTimer();
getNextHit();
