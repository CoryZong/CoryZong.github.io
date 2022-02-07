const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastward = document.querySelector("#sixteenth");
const animation = document.querySelector("div.animation");
lastward.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity:0; pointer-events:none;";
});
