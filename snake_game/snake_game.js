function game(){
// initialisation canvas
let canvas=document.querySelector("canvas");
let ctx=canvas.getContext("2d");


// initialisation des variables globales
let x=0;
let y=0;
let csx=0;
let csy=0;
let gs=630;
let bs=30;
let plus=[];
let score=document.querySelector("span");
let points=0;

// dessin de la tête
function draw_head(){
    ctx.clearRect(0,0,gs,gs);
    ctx.fillStyle="green"
    if (fx==x && fY==y) {
        // plus_block();
    };
    ctx.fillRect(x,y,bs,bs);
    disco();
    n();
};
// mouvements
document.addEventListener("keydown",keydown);
function keydown(event){
switch (event.key) {
    case "ArrowLeft":
        case "ArrowLeft":
            x-=30;
            draw_head();
            break;
        case "ArrowUp":
            y-=30;
            draw_head();
            break;
        case "ArrowRight":
            x+=30;
            draw_head();
            break;
        case "ArrowDown":
            y+=30;
            draw_head();
            break;
        default:
            break;
};
if(x >600){
    alert("vous avez crashé,retentez votre chance!!!Votre score est:"+points);
    x=0;
    draw_head();
}
else if(x<0){
    alert("vous avez crashé,retentez votre chance!!!Votre score est:"+points);
    x=600;
    draw_head();



}
else if(y<0){
    alert("vous avez crashé,retentez votre chance!!!Votre score est:"+points);
    y=600;
    draw_head();
}
else if(y>600){
    alert("vous avez crashé,retentez votre chance!!!Votre score est:"+points);
    y=0;
    draw_head();
// csx=fx;
// csy=fY;
};
};

// nourriture
let fx=Math.floor(Math.random()*10)*60;
let fY=Math.floor(Math.random()*10)*60;
function n(){
ctx.fillStyle="yellow";
ctx.fillRect(fx,fY,bs,bs);
};
// disparition et score
function disco(){
    if (fx==x && fY==y) {

         fx=Math.floor(Math.random()*10)*60;
         fY=Math.floor(Math.random()*10)*60;
         points+=1;
        score.innerText=points;
        csx=fx+30;
        csy=fY+30;
        
    };
};
// ajout de block
function plus_block(){
        ctx.fillStyle="red";
        ctx.fillRect(csx,csy,bs,bs);
    }
    

draw_head();};
requestAnimationFrame(game);
