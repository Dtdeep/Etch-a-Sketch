const mainContainer = document.querySelector(".main-container");
for(let i = 0; i < 256; i++){
    let divElement = document.createElement("div");
    divElement.classList.add("div-Element");
    mainContainer.appendChild(divElement);
}

mainContainer.addEventListener("mouseover", (event) => {
    let eventTarget = event.target;
    console.log(eventTarget);  
    if(eventTarget.classList == "div-Element"){
        eventTarget.classList.add("new-color")
    }
})


