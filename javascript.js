const promptSize=prompt('what size should the grid be?',16);
const promptColor=prompt('give color hex value',"#211ec7");
const size=Number(promptSize);
console.log(typeof(size))

for (let i =0; i<size*size;i++){
    const gridElement= document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.style.width=`${400/size}px`
    const container= document.getElementById("container");
    container.appendChild(gridElement);
}
const gridElements = document.querySelectorAll(".gridElement");

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
gridElements.forEach(function(e){
    e.addEventListener("mousedown",function(){
        setColor(e);
        e.classList.add("color");
        MDOWN = !MDOWN;
    });
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