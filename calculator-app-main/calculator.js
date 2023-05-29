// selectionner les elements
let resultat;
let egale = document.querySelector("#egale");
let efface = document.querySelector("#efface");
let supprime = document.querySelector("#delete");
// ecran
let screen = document.querySelector("#affichage");
// boutons
let btns = Array.from(document.querySelectorAll(".nbr_op"));
let btn_clicked = [];
let operation = [];

// affichage des boutons clickés à l'ecran
function affichage() {
  for (const element of btns) {
    element.addEventListener("click", () => {
      btn_clicked.push(element.value);
      operation.push(element.value);
      if (element.value == "x") {
        operation.pop();
        operation.push("*");
        console.log(operation);
      }
      screen.innerText = btn_clicked.join("");
    });
  }
}
// resolution de l'operation
egale.addEventListener("click", () => {
  calcul();
});
function calcul() {
  resultat = eval(operation.join(""));
  console.log(resultat);
  screen.innerText = resultat;
  btn_clicked = [resultat];
  operation = [resultat];
  console.log(resultat);
}
affichage();
// initialisation des fonctionalités spéciales
efface.addEventListener("click", () => {
  btn_clicked = [];
  screen.innerText = btn_clicked;
});
supprime.addEventListener("click", () => {
  btn_clicked.pop();
  screen.innerText = btn_clicked;
});
