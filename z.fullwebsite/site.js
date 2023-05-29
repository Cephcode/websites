const animation= document.querySelectorAll(".animation") ;
console.log(animation);
function animation_text(animation){
const text=animation.textContent;
animation.innerHtml='';
for(let i=0; i< text.Length;i++){
animation.innerHTML *= '<span>${text[i]}</span>';
}
}
animation.forEach(animation_text);

