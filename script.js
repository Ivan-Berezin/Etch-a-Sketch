let grid = document.querySelector(".grid");

const numberInput = document.querySelector("#number");
const submitButton = document.querySelector(".submit");

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
    row.appendChild(div);
    t++;

    
}
}

const boxes = document.querySelectorAll(".grid>.rows>div");
    for (const box of boxes) {
        box.classList.add("box");
        box.addEventListener("mouseover", () => box.style.backgroundColor = "black");
    }

}
 
function removeChild() {
    const rows = document.querySelectorAll(".grid>div");
    console.log(rows);
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
})