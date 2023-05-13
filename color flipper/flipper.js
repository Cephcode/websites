// canvas
let c = document.querySelector("canvas");
let ctx = c.getContext("2d");

// variables globales
let titre = document.querySelector("h1");
let texte = document.querySelector("span");
let btn = document.querySelector("button");

// trois nombre aleatoire
function couleur() {
  let nbr1 = Math.round(Math.random() * 100);
  let nbr2 = Math.round(Math.random() * 200);
  let nbr3 = Math.round(Math.random() * 100);
  texte.innerText = "rgb(" + nbr1 + "," + nbr2 + "," + nbr3 + ")";
  ctx.fillStyle = "rgb(" + nbr1 + "," + nbr2 + "," + nbr3 + ")";
  ctx.fillRect(0, 0, 300, 150);
}
// btn.addEventListener("click", couleur);
