let level= 1;
let index= 1;
let correct = new Audio("./sound/soundsilk-Correct-Answer-Soundeffect.mp3");
let wrong = new Audio("./sound/soundsilk-buzzer-wrong-answer.mp3");

const header = document.querySelector("header");
const section = document.querySelector("section");
let headerTextDiv = document.createElement("p");
header.appendChild(headerTextDiv);

const game = () => {
    section.innerHTML = "";
    for (let i=0; i< level+1; i++) {
        let squares = document.createElement("div");
        squares.classList.add("square");
        let x = Math.floor(Math.random()*50);
        let y = Math.floor(Math.random()*70);
        console.log(x,y)
        squares.style.top = y + "%";
        squares.style.left = x + "%";
        squares.textContent= i + 1;
        section.appendChild(squares);
    }
    document.querySelectorAll("div").forEach(item=>{
        item.style.pointerEvents = "none";
    });
    setTimeout(() => {
        document.querySelectorAll("div").forEach(item => {
            item.style.color="transparent";
            item.style.pointerEvents="all";
        })
    }, 4000);

    document.querySelectorAll("div").forEach((item) => {
        item.addEventListener("click", (e) => { 
            e.target.style.color = "white";

            if(e.target.textContent!= index){
               e.target.style.background="red";
               wrong.play(); 
               wrong.currentTime = 0 ;
               document.querySelectorAll("div").forEach((item) => {
                item.style.pointerEvents = "none";

            });
            if(level!=1){
                setTimeout(() => {
                    level--;
                    index = 1 ;
                    game();
                },2000);
            } else {
                setTimeout(() => {
                index = 1 ;
                game();
            },2000);
        }
        } 
        else { 
            e.target.style.background = "green";
        correct.play();
        correct.currentTime = 0 ;
        if(index=== level+1){
            setTimeout(() => {
                level++;
                index = 1;
                game();
            },2000);
        }
        index++;
    }
    });
  });
}
game();