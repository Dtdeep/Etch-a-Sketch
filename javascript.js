const mainContainer = document.querySelector(".main-container");
const newGridBtn = document.querySelector("#newGridBtn");

const createGrid = (dimension) =>{
    removeCurrentGrid();
    numberOfBoxes = dimension * dimension;
    for(let i = 0; i < numberOfBoxes; i++){
        const divElement = document.createElement("div");
        divElement.classList.add("div-Element");
        mainContainer.appendChild(divElement);
    };()=>{

  node  }
}

 const removeCurrentGrid = () =>{
    const allDivElement = document.querySelectorAll("#div-Element");
 }



const newGridPromptVar = () => {
    let newGridPrompt = prompt("What will be the new dimension?", 16);
    createGrid(newGridPrompt);
    console.log("it works!");
};

mainContainer.addEventListener("mouseover", (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);  
    if(eventTarget.classList == "div-Element"){
        eventTarget.classList.add("new-color")
    }
});

createGrid(16);
newGridBtn.addEventListener("click", newGridPromptVar);





