// recuperation des elements du DOM.
let container1 = document.getElementById("container1");
let msg = document.getElementById("message");
let texte_operation = document.getElementById("operation");
let input = document.getElementById("numbers");
let check = document.getElementById("validation");
let result = 0;
let container2 = document.getElementById("container2");
let message1 = document.getElementById("message1");
let score = 0;
let remplace_score = document.getElementById("score");
//operation
function operation() {
  //afficher aleatoirement une operation.
  //creer deux nombres et un nombre entre 0 et 1 exclus.
  let nbr1 = Math.round(Math.random() * 50);
  let nbr2 = Math.round(Math.random() * 50);
  let change = Math.random();
  //recuperer la valeur de "change" pour initialiser des conditions pour permettre la creation d'operation.
  if (change < 0.25) {
    texte_operation.innerText = nbr1 + "+" + nbr2;
    result = nbr1 + nbr2;
    console.log(result);
  } else if (change > 0.25 && change < 0.5) {
    texte_operation.innerText = nbr1 + "-" + nbr2;
    result = nbr1 - nbr2;
    console.log(result);
  } else if (change > 0.5 && change < 0.75) {
    texte_operation.innerText = nbr1 + "x" + nbr2;
    result = nbr1 * nbr2;
    console.log(result);
  } else {
    texte_operation.innerText = nbr1 + "/" + nbr2;
    result = nbr1 / nbr2;
    console.log(result);
  }
}
operation();
function reponse_msg() {
  let reponse = Number(input.value);
  //condition d'affichage message
  if (reponse == result) {
    msg.innerText = "correcte";
    msg.style.backgroundColor = "green";
    msg.style.paddingTop = "13px";
    score += 1;
    input.value = " ";
      msg.style.display="block";
  } else {
    container1.style.display = "none";
    affichage_score();
      input.value = " ";
      msg.style.display="none";
  }
  console.log(score);
}
container2.style.display = "none";
function affichage_score() {
  remplace_score.innerText = score;
  container2.style.display = "block";
  message1.classList.add("message");
}
