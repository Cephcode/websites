// recuperation des variables
const nbr1= Math.round(Math.random(1,31)*(31-1)+1);
const nbr2= Math.round(Math.random(0,35)*(35-0)+0);
const bu1= document.querySelector("#top");
const bu2= document.querySelector("#no");
input=document.querySelector("#nombre");
const result=nbr1+nbr2;
// affichage
function affichage(){
let nombre1=document.querySelector("#calcul").innerText=nbr1
let nombre2=document.querySelector("#calcul1").innerText=nbr2;
document.querySelector("#calcul").style.color="white";
document.querySelector("#calcul1").style.color="white"; 
return nombre1;
}
function recuperation_verification(){
let valeur=input.value;
if (valeur==0){
bu1.style.display="none";
bu2.style.display="none";
}
else if(valeur==result)
{
bu1.style.display="block";
bu2.style.display="none";
bu1.classList.add("top");
}
else if(valeur!==result)
{
bu1.style.display="none";
bu2.style.display="block";
bu2.classList.add("no");
}
else{
alert("error_system");
}
} 
function redemarage(){
if(valeur==result){
valeur.Clear()
}
}
affichage();
recuperation_verification();
