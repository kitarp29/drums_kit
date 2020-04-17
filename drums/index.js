var i=0;
for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
var pk=this.innerHTML;
lily(pk);
buttonAnimation(pk);
//   var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
// audio.play();

});
}
document.addEventListener("keydown",function(event){
lily(event.key);
buttonAnimation(event.key);
})

function lily(key)
{
  switch (key) {
    case "w":
      var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
        var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":
          var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3");
          audio.play();
          break;
          case "d":
            var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
            break;
            case "j":
              var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
              audio.play();
              break;
              case "k":
                var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
                audio.play();
                break;
                case "l":
                  var audio= new Audio("C:/Users/kitar/Downloads/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
                  audio.play();
                  break;
    default:

  }
}
function buttonAnimation(currentKey)
{
var activeBttn=document.querySelector("."+currentKey);
activeBttn.classList.add("pressed");
setTimeout(function(){
  activeBttn.classList.remove("pressed")
},100);
}
