let level= 1;
let index= 1;
let correct = new Audio("./sound/soundsilk-Correct-Answer-Soundeffect.mp3");
let wrong = new Audio("./sound/soundsilk-buzzer-wrong-answer.mp3");

const header = document.querySelector("header");
const section = document.querySelector("section");
let headerTextDiv = document.createElement("p");
header.appendChild(headerTextDiv);

const game = () => {
    let xList = [];
    let yList = [];

    section.innerHTML = "";
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // 30 width + border 5px sag ve sol = 40
    let xRandom = (width * 80 / 100) - 40;
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
    let yRandom = (height * 80 / 100) - 40;

    writeHederinfo(level +"."+ "level starting");
    for (let i=0; i< level+1; i++) {
        let squares = document.createElement("div");
        squares.classList.add("square");

        // To reassign x and y values in case the boxes intersect
        let whileCondition = true;
        while (whileCondition) {
            whileCondition = false;
            let x = Math.floor(Math.random()* xRandom);
            let y = Math.floor(Math.random()* yRandom);
            if(checkDifference(x,y, xList, yList)){
                whileCondition = true;
                console.log("it came across")
            } else {
                xList.push(x);
                yList.push(y);
                squares.style.top = y + "px";
                squares.style.left = x + "px";
                // height ve weight set in css to 30px.
                squares.textContent= i + 1;
                section.appendChild(squares);
                whileCondition = false;
            }
        }

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
const checkDifference = (x,y, xList, yList ) => {
    console.log(x,y, xList, yList )
    let lengList = xList.length;
    for(let i=0; i<lengList; i++){
        if((Math.abs(xList[i] - x) < 40 ) && (Math.abs(yList[i] - y) < 40)) return true;
    }
    return false;
}
const writeHederinfo = (gameMessage) => {
    headerTextDiv.innerHTML = gameMessage ;
}
game();