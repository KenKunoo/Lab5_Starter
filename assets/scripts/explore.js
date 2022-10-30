// explore.js

window.addEventListener('DOMContentLoaded', init);
// vars
const voiceOptions = document.getElementById("voice-select");
const synth = window.speechSynthesis;
const buttonClick = document.querySelector("button");
const inputForm = document.getElementById('text-to-speak');
var imageChange = document.querySelector("img");
let voices = [];


function init() {
    // functions
    function populateVoiceList() {
        voices = synth.getVoices();
  
        for (let i = 0; i < voices.length ; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceOptions.appendChild(option);
        }
    };

    // call function
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // talk
    buttonClick.addEventListener('click', (event) => {
        voices = synth.getVoices();
        event.preventDefault();

        const utterThis = new SpeechSynthesisUtterance(inputForm.value);
        const selectedOption = voiceOptions.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < voices.length ; i++) {
          if (voices[i].name === selectedOption) {  
            utterThis.voice = voices[i];
          }
        }
        synth.speak(utterThis);
        imageChange.src = "assets/images/smiling-open.png";

        // stop speaking
        utterThis.addEventListener('end', (event) => {
            imageChange.src = "assets/images/smiling.png";
        });
        
    });
};


