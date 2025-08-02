//create 16*16 grid
let n = 16;
createGrid(n);
const button = document.querySelector("button");
button.addEventListener("click", function () {
    n = prompt("Enter no. of boxes (n) per side for (nxn) grid");
    while(n>100){
        n = prompt("Too large! Please enter a numer less than 100")
    }
    let container = document.querySelector(".container");
    container.innerHTML="";
    createGrid(n);
});

function createGrid(n) {
    const boxSide = 960/n;
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        let container = document.querySelector(".container");
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
            box.style.height = boxSide+"px";
            box.style.width = boxSide+"px";
        }
    }

    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseenter", function (e) {
            let box = e.target;
            console.log(box);
            let r = Math.random()*256;
            let g = Math.random()*256;
            let b = Math.random()*256;
            box.style.backgroundColor = "rgb("+r+","+g+","+b+")" ;
        });
    }
}

