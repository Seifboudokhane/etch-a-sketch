let promptColor;
let isMouseDown=false;
document.body.addEventListener("mousedown",()=>isMouseDown=true);
document.body.addEventListener("mouseup",()=>isMouseDown=false);
//Functions that set the color of the cell when clicked or dragged above
function setColor(e){
    e.style.backgroundColor=promptColor;
}

function resetGrid(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach(function(e){
        e.classList.remove("color");
        e.style.backgroundColor=" rgb(255, 255, 255)";
    })
}
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click",resetGrid);

const createButton = document.getElementById("create");
createButton.addEventListener("click",createCanvas);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input",()=>{
    promptColor = colorPicker.value;
})

function deleteCanvas(){
    const gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((e)=>e.remove());
}

function createCanvas(){
    deleteCanvas();
    const promptSize=prompt('what size should the grid be ? (Max=64)',16);
    let size;
    isNaN(promptSize) ? size=16 : (Number(promptSize)>64) ? size=64 : size=Number(promptSize);
    promptColor="black";
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
        });
        e.addEventListener("mouseover",()=>{
            if(isMouseDown){
                setColor(e);
                e.classList.add("color");
            }
        })
        e.addEventListener("dragstart",(event)=>{
            event.preventDefault();
        })
        
        e.addEventListener('drop', (event) => {
            event.preventDefault();
        })
    });
}