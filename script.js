let grid = document.querySelector(".grid");

const numberInput = document.querySelector("#number");
const submitButton = document.querySelector(".submit");

function generateRandomColor() { 
    return Math.floor(Math.random() * 225);
}
console.log(generateRandomColor());

function fillGrid(num) {

    let i = 0;
    while (i < num) { 
        div = document.createElement("div");    
        grid.appendChild(div);
        i++;
    }

    const rows = document.querySelectorAll(".grid>div");



    for (const row of rows) {
        row.classList.add("rows");
        let t = 0;
    while (t < num) { 
        div = document.createElement("div");   
        div.classList.add("box");
        div.classList.add('white'); 
        row.appendChild(div);
        t++;  

    const boxes = document.querySelectorAll(".grid>.rows>.white");
    for (const box of boxes) {
        
        box.addEventListener("mouseover", () => {
            if (box.style.backgroundColor = "white") {
                box.style.backgroundColor = "rgb(" + generateRandomColor() + "," + generateRandomColor() + "," + generateRandomColor() + ")"; 
                box.classList.remove("white");
                 }
            });
        };
    
    }
    }
};




/* 
    TO CREATE A RANDOM COLOR WHEN MOUSE OVER AND MAKE IT 10% DARKER EACH TIME MOUSE GOES THROUGH.

    WHEN MOUSE GOES OVER A BLOCK
        Function color() {
            if (box.style.color = rgba(0,0,0,0) {
        GENERATE RANDOM COLOR (This means that on mouseover, i need to run a function, called, set color, instead of just setting the color.)
        SET BACKGROUND COLOR OF BLOCK TO RANDOM COLOR
            }
        Else (BLOCK ALREADY HAS COLOR) {
            SET BRIGHTNESS TO -10%.
        }
    }

*/

let x = 100;

 function color() {
  if (box.style.backgroundColor = "white") {
   box.style.backgroundColor = `rgb(${generateRandomColor(),generateRandomColor(),generateRandomColor()})`;
  } else {
    
    box.style.filter = "brightness(" + (x - 10) +"%)"; 
    x -= 100;
  }
}





function removeChild() {
    const rows = document.querySelectorAll(".grid>div");
    for (row of rows) {
        row.remove();
    }
    };

num = 16;
fillGrid(num);

submitButton.addEventListener("click", () => {
    removeChild();
    num = numberInput.valueAsNumber;
    fillGrid(num);
});

