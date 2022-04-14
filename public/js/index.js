// COUNTER FUNCTIONALITY
let project = setInterval(projectDone, 1);
let helped = setInterval(helpedchildren, 1);
let taught = setInterval(taughtchildren, 1);
let donate = setInterval(donated, 1);
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone() {
  count1++;
  document.querySelector(".num_1").textContent = count1;
  if (count1 === 10) {
    clearInterval(project);
  }
}

function helpedchildren() {
  count2++;
  document.querySelector(".num_2").textContent = count2;
  if (count2 === 100) {
    clearInterval(helped);
  }
}

function taughtchildren() {
  count3++;
  document.querySelector(".num_3").textContent = count3;
  if (count3 === 900) {
    clearInterval(taught);
  }
}

function donated() {
  count4++;
  document.querySelector(".num_4").textContent = count4;
  if (count4 === 1500) {
    clearInterval(donate);
  }
}
