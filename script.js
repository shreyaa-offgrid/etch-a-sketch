//create 16*16 grid
let n = 16;
for(let i=0;i<n;i++){
    let row = document.createElement("div");
    row.classList.add("row");
    let container = document.querySelector(".container");
    container.appendChild(row);
    for(let j = 0;j<n;j++){
        let box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }
}
const boxes = document.querySelectorAll(".box");
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("mouseenter", function(e){
        let box = e.target;
        console.log(box);
        box.style.backgroundColor = "green";
    });
}