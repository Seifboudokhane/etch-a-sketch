let promptColor;

//Flag to know if mouse is down on table
let MDOWN = false;

//Functions that set the color of the cell when clicked or dragged above
function setColor(e){
    e.style.backgroundColor=promptColor;
}

//this function is for dragging the mousse
function cellEnter(){
    if (MDOWN) {
        this.classList.add("color");
        setColor(this);
    }
}
function resetGrid(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach(function(e){
        e.classList.remove("color");
        e.style.backgroundColor=" rgb(255, 255, 255)";
    })
}
const button = document.getElementById("reset");
button.addEventListener("click",resetGrid);

const button1 = document.getElementById("create");
button1.addEventListener("click",createCanvas);

function deleteCanvas(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((e)=>e.remove());
}

function createCanvas(){
    deleteCanvas();
    const promptSize=prompt('what size should the grid be?',16);
    const size=Number(promptSize);
    promptColor=prompt('what color do you want ?',"blue");
    let canvasSize= getComputedStyle(document.querySelector("#container")).width;
    canvasSize=canvasSize.slice(0,-2);
    for (let i =0; i<size*size;i++){
        const gridElement= document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.width=`${canvasSize/size}px`
        const container= document.getElementById("container");
        container.appendChild(gridElement);
    }
    const gridElements = document.querySelectorAll(".gridElement");

    gridElements.forEach(function(e){
        e.addEventListener("mousedown",function(){
            setColor(e);
            e.classList.add("color");
            MDOWN = !MDOWN;
        });
        e.addEventListener("mouseup",()=>MDOWN = !MDOWN);
        e.addEventListener("mouseenter",cellEnter);
        e.addEventListener("dragstart",event=> event.preventDefault());
        e.addEventListener("contextmenu",event=> event.preventDefault());
    });
}