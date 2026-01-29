const mainContainer = document.querySelector(".main-container");
const newGridBtn = document.querySelector("#newGirdBtn");
let newGridDimension = 256;

const newGridBtnListener = newGridBtn.addEventListener("click", ()=>{
    let newGridPrompt = prompt("What will be the new dimension?", 16);
        newGridDimension = newGridPrompt * newGridPrompt;
        console.log("it works!");
});


for(let i = 0; i < newGridDimension; i++){
    const divElement = document.createElement("div");
    divElement.classList.add("div-Element");
    mainContainer.appendChild(divElement);
}

mainContainer.addEventListener("mouseover", (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);  
    if(eventTarget.classList == "div-Element"){
        eventTarget.classList.add("new-color")
    }
})


