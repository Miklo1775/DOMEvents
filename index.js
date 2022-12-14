// const cookieImg = document.querySelector(".cookie");
// const counter = document.querySelector(".counter");

// let counter1 = 0;
// cookieImg.addEventListener("click", function () {
//   counter.innerHTML = counter1++;
//   // counter.innerHTML++;
// });

const btnSmall = document.getElementById("small");
const btnBig = document.getElementById("big");
const placeholder = document.querySelector(".placeholder");
let counter = 50;
btnSmall.addEventListener("click", function () {
  if (counter > 1) {
    placeholder.style.fontSize = counter-- + "px";
  }
  // placeholder.style.fontSize = "10px";
});

btnBig.addEventListener("click", function () {
  if (counter < 100) {
    placeholder.style.fontSize = counter++ + "px";
  }
});

// const btn = document.querySelector(".btn");
// // const form = document.querySelector(".form");
// const body = document.querySelector("body");
// const input = document.getElementById("input");

// function returnText() {
//   let input = document.getElementById("input").value;
// }

// function getInput(input) {}

// btn.addEventListener("click", function () {
//   let input = document.getElementById("input").value;
//   body.style.backgroundColor = input;
// });

// const up = document.getElementById("up");
// const down = document.getElementById("down");
// const left = document.getElementById("left");
// const right = document.getElementById("right");

// const crane = document.querySelector(".crane");
// let counter = 0;
// up.addEventListener("click", function () {
//   crane.style.marginTop = counter-- + "px";
// });

// down.addEventListener("click", function () {
//   crane.style.marginTop = counter++ + "px";
// });
// let counter1 = 0;
// left.addEventListener("click", function () {
//   crane.style.marginLeft = counter1-- + "px";
// });

// right.addEventListener("click", function () {
//   crane.style.marginLeft = counter1++ + "px";
// });

// const input = document.querySelector(".input");
// const btn = document.querySelector(".btn");
// const output = document.querySelector(".output");

// btn.addEventListener("click", function () {
//   output.innerHTML = Math.trunc(Math.random() * input.value + 1);
// });
