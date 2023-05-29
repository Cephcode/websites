// selectionner les elements
let resultat;
let egale = document.querySelector("#egale");
let efface = document.querySelector("#efface");
let supprime = document.querySelector("#delete");
let a=true;
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
        // console.log(operation);
      }
      screen.innerText = btn_clicked.join("");
      console.log(btn_clicked)
    });
  }
}
// resolution de l'operation
egale.addEventListener("click", () => {
  calcul();
});
function calcul() {
  if(a){
    resultat = eval(operation.join(""));
    console.log(resultat);
    screen.innerText = resultat;
    operation=[];
    btn_clicked = String(resultat).split("").map((num)=>{
      return Number(num)
    });
    operation=btn_clicked;
    console.log(btn_clicked,operation)
    operation = [resultat];
  }
  
}
affichage();
// initialisation des fonctionalités spéciales
efface.addEventListener("click", () => {
  btn_clicked = [];
  operation=[];
  screen.innerText = btn_clicked;
});

supprime.addEventListener("click", () => {
  alert('This button don\'t work ,please refresh the page')
});
