// RECUPERATION DES VARIABLES
let btn = document.querySelector("#submit");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let span = document.querySelector("#notification");
let btns = document.getElementsByClassName("nombres");
console.log(span);
// animation
btn.addEventListener("click", () => {
  first.classList = "animation";
  setTimeout(() => {
    first.style.display = "none";
    second.style.display = "block";
    second.classList = "animation1";
  }, 400);
});
function replace(e) {}
// remplacement
for (let btn of btns) {
  btn.addEventListener("click", () => {
    let value = btn.innerHTML;
    // btn.style.background = "hsl(25, 97%, 53%)";
    span.innerHTML = value;
    console.log(btn.innerHTML);
  });
}
