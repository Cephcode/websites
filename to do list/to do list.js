// selection des elements
let texte = document.querySelector("#zoneDeTexte");
let submit = document.querySelector("#submit");
let container = document.querySelector("#container");
let buttons = document.querySelectorAll("button");
// initialisation de l’ajout de la note a l’écran
submit.addEventListener("click", () => {
  reaffichage();
});

function reaffichage() {
  // recuperation du texte écrit
  let texte_ecrit = texte.value;
  // creation d’une div
  let div = document.createElement("div");
  container.appendChild(div);
  // insertion de la valeur du texte tapper dans la div
  let paragraphe = (div.innerText = texte_ecrit);
  // stylisation de la classe
  div.classList.add("style");
  // ajout de la possibilité de la possibilité de supprimer
  // creation du bouton
  let div_sup = document.createElement("div");
  btn = document.createElement("button");
  btn.innerText = "-";
  btn.classList.add("supp");
  // affichage du bouton
  div_sup.appendChild(btn);
  div_sup.classList.add("supprime");
  div.appendChild(div_sup);
  // ajout de la possibilité de supprimer
  btn.addEventListener("click", () => {
    div.classList.toggle("animation");
    div.style.display = "none";
  });
  texte.value = " ";
  // btn.addEventListener("click",div.style.display="none");
}
