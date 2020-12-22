

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        keyAnimation(buttoninnerHTML);
      });
  }

  document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    keyAnimation(event.key);
  });
  
  function makeSound(key) {
      switch (key) {
          case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
          case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
          case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
          case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
          case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
          case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
          case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
          default: 
          console.log("Wrong Key Pressed Buddy!! Press the keys that are shown in the above drum pics.")
  }
}

function keyAnimation(currentKey) {
  var key = document.querySelector("."+currentKey);
  key.classList.add("pressed");

  setTimeout(function() {
      key.classList.remove("pressed");
  },100);
}