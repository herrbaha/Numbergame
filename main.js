let level= 1;
let index= 1;
let correct = new Audio("./sound/soundsilk-Correct-Answer-Soundeffect.mp3");
let wrong = new Audio("./sound/soundsilk-buzzer-wrong-answer.mp3");

const section = document.querySelector("section");

const game = () => {
    section.innerHTML = "";
    for (let i=0; i< level+1; i++) {
        let squares = document.createElement("div");
        squares.classList.add("square");
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*500);
        squares.style.top = y + "px";
        squares.style.left = x + "px";
        squares.textContent= i + 1;
        section.appendChild(squares);
    }
    
}
game();