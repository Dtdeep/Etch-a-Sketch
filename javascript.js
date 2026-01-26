const mainContainer = document.querySelector(".main-container");
for(let i = 0; i < 256; i++){
    let divElement = document.createElement("div");
    divElement.classList.add("div-Element");
    mainContainer.appendChild(divElement);
}

mainContainer.addEventListener("click", (event) => {
    let eventTarget = event.target;
    console.log(eventTarget);   
})


