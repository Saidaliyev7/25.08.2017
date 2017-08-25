var button=document.querySelector(".button button");
 var popup=document.querySelector(".popup");
button.addEventListener("click",function(){
   
    popup.style.display="block";
})

var times=document.querySelector(".items i");
times.addEventListener("click",function(){
popup.style.display="none";
})

window.addEventListener("keydown",function(event){
    if(popup.style.display=="block"){
        if(event.which==27){
            popup.style.display="none";
        }
    }
})