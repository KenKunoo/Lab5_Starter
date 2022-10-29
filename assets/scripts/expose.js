// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
}
// conf
var jsConfetti = new JSConfetti();
// horn select vars
var button = document.getElementById("horn-select");
var changeImage = document.querySelector("img");
var changeAudio = document.querySelector("audio");
var buttonIdx = 0;

// volume slider vars
var volControls = document.getElementById("volume-controls");
var volumeVal = document.querySelector("[value='50']");
var volImage = volControls.querySelector("img");

// on button clicked
const buttonClick = document.querySelector("button");

// event on select horns
button.addEventListener("click", (event)=> {
    if (button.selectedIndex == 1 && buttonIdx != 1) {
      buttonIdx = 1;
      changeImage.src = "assets/images/air-horn.svg";
      changeAudio.src = "assets/audio/air-horn.mp3";
    }
    else if (button.selectedIndex == 2 && buttonIdx != 2) {
      buttonIdx = 2;
      changeImage.src = "assets/images/car-horn.svg";
      changeAudio.src = "assets/audio/car-horn.mp3"
    }
    else if (button.selectedIndex == 3 && buttonIdx != 3) {
      buttonIdx = 3;
      changeImage.src = "assets/images/party-horn.svg";
      changeAudio.src = "assets/audio/party-horn.mp3";
    }
});

// on volume changed
volumeVal.addEventListener('change', (event) => {
    if (volumeVal.value == 0) {
      volImage.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volumeVal.value >= 1 && volumeVal.value < 33) {
      volImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (volumeVal.value >= 33 && volumeVal.value < 67) {
      volImage.src = "assets/icons/volume-level-2.svg";
    }
    else if (volumeVal.value >= 67) {
      volImage.src = "assets/icons/volume-level-3.svg";
    }
});

// on button clicked
buttonClick.addEventListener("click", (event)=> {
    changeAudio.volume = Math.ceil(volumeVal.value)/100;
    changeAudio.play();

    if (button.selectedIndex == 3) {
      jsConfetti.addConfetti({
        confettiRadius: 5,
      })
    }
});