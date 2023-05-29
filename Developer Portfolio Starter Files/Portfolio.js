let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".x_menu");
let body = document.querySelector("body");
console.log(toggler, menu);
toggler.addEventListener("click", () => {
  body.classList.toggle("open");
});
