let grid = document.querySelector(".grid");


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
        
    }

}

fillGrid(10);
