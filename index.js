var numberofbuttons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberofbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";

    var buttoninnerHtml = this.innerHTML;

    makeSound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})



function makeSound(key){

  switch (key) {
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;


      default:
      console.log(buttoninnerHtml);

  }

}


function buttonAnimation(keypressed){
  var activeButton = document.querySelector("."+keypressed);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
