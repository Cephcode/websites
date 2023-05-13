
let nbr1 = (min,max) => {
return Math.round(Math.random(min,max)*(max-min)+min);
}
let nbr2 = (min,max) => {
return Math.round(Math.random(min,max)*(max-min)+min);
}
 const x = Number(document.getElementById("calcul").innerHTML=nbr1(0,20),style())+Number(document.querySelector("#calcul1").innerHTML = nbr1(0,20),style());


function style(){
let couleur1=document.getElementById("calcul1");
let couleur=document.getElementById("calcul");
couleur1.classList.add("style");
couleur.classList.add("style");
}

function affichage_calcul(){
 const z= Number(document.querySelector("#nombre").value);
 j=document.querySelector("#top");
 r=document.querySelector("#no");
 console.log(x);
 switch(true){
 case z==0:
 r.style.display="none";
 j.style.display="none";
 break;
 case x==x:
 j.innerText="correcte"
 r.style.display="none";
 j.classList.add("top");
 break;
 case x!==x:
  r.innerText="incorrecte"
 j.style.display="none";
 r.classList.add("top");
 break;
 
 }

//while (true){

}
//}
affichage_calcul();
//style();




