const mainContainer = document.querySelector(".main-container");
const newGridBtn = document.querySelector("#newGridBtn");

 const removeCurrentGrid = () =>{
    const allDivElement = document.querySelectorAll(".div-Element");
    let allDivElementArray = [...allDivElement];
    allDivElementArray.map((node, index)=>{
        console.log("node list ", node, index);
        mainContainer.removeChild(node);
    })  
 }

const createNewGrid = (dimension) =>{
    removeCurrentGrid();
    const numberOfTotalDivs = dimension * dimension;
    const sizeForEachDiv = 960/dimension;
    for(let i = 0; i < numberOfTotalDivs; i++){
        const divElement = document.createElement("div");
        divElement.classList.add("div-Element");
        divElement.style.width = `${sizeForEachDiv}px`;
        divElement.style.height = `${sizeForEachDiv}px`;
        mainContainer.appendChild(divElement);
    }
}

const askNewGridDimensionPromp = () => {
    const newGridSizePrompt = prompt("What will be the new dimension?", 16);
    const isWithin100 = newGridSizePrompt <= 100
    const isGreaterThan0 = newGridSizePrompt > 0;
    if(isWithin100 && isGreaterThan0){
        createNewGrid(newGridSizePrompt);
    }else{
        alert("Too big or too small or not allowed");
    }
};

const changeColorWhenHovered = (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);  
    if(eventTarget.classList == "div-Element"){
        eventTarget.classList.add("new-color")
    }
}

mainContainer.addEventListener("mouseover", changeColorWhenHovered);

createNewGrid(16);
newGridBtn.addEventListener("click", askNewGridDimensionPromp);





