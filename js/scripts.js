'use strict'

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

//Reconocimiento de voz:
let recognition = new webkitSpeechRecognition();
const card__text = document.getElementById("text_voice");
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.iterimResults = false;

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    card__text.textContent += frase;
}

card__text.addEventListener('click',()=>{
    card__text.textContent = "";
    recognition.start();

});

toggleTheme.addEventListener('click', ()=>{
document.body.classList.toggle("dark");
if(toggleIcon.src.includes('moon.svg')){
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
}

else{
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
}

}
);

toggleColors.addEventListener('click', (e)=>{
rootStyles.setProperty('--primary-color', e.target.dataset.color);

//Esto es una prueba


}


);