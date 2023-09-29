var arr = document.querySelectorAll(".drum");
for(var i=0;i<7;i++){
     arr[i].addEventListener("click",function (){
      var btn = this.innerText;
      keypressed(btn);
      makesound(btn);
     });
}
document.addEventListener("keypress",function(event){
  keypressed(event.key)
  makesound(event.key);
});//for keyboard

function makesound(key){
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      alert("Something went wrong");
  }
}
function keypressed(btn){
    var activeKey=document.querySelector("."+btn);
    activeKey.classList.add("pressed");
    setTimeout(function(){
      activeKey.classList.remove("pressed");
    },100);
}