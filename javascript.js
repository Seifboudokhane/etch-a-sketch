const promptSize=prompt('what size should the grid be?');
const size=Number(promptSize);
console.log(typeof(size))

for (let i =0; i<size*size;i++){
    const gridElement= document.createElement("div");
    gridElement.classList.add("gridElement");
    const container= document.getElementById("container");
    container.appendChild(gridElement);
}
const gridElements = document.querySelectorAll(".gridElement");

/* Flag to know if mouse is down on table */
let MDOWN = false;


function cellEnter(){
    if (MDOWN) {
        this.classList.add("color");
    }
}

gridElements.forEach(function(e){
    e.addEventListener("mousedown",()=>e.classList.add("color"));
    e.addEventListener("mousedown",()=>MDOWN = !MDOWN);
    e.addEventListener("mouseup",()=>MDOWN = !MDOWN);
    e.addEventListener("mouseenter",cellEnter);
    e.addEventListener("dragstart",event=> event.preventDefault());
});
function resetGrid(){
    gridElements.forEach(function(e){
        e.classList.remove("color");
    })
}
const button = document.getElementById("reset");
button.addEventListener("click",resetGrid);
// gridElements.forEach(function(e){
//     e.addEventListener("dragover",()=>e.classList.add("color"))
//     e.addEventListener("mousedown",()=>e.classList.add("color"))
// });