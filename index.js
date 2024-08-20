let home = 0;
let guest = 0;

let homeGrab = document.getElementById("score-home");
let guestGrab = document.getElementById("score-guest");

function homeScoreOne() {
  home = home + 1;
  homeGrab.innerText = home;
}

function homeScoreTwo() {
  home = home + 2;
  homeGrab.innerText = home;
}

function homeScoreThree() {
  home = home + 3;
  homeGrab.innerText = home;
}

function guestScoreOne() {
  guest = guest + 1;
  guestGrab.innerText = guest;
}

function guestScoreTwo() {
  guest = guest + 2;
  guestGrab.innerText = guest;
}

function guestScoreThree() {
  guest = guest + 3;
  guestGrab.innerText = guest;
}
