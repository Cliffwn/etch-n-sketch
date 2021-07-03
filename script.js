const containerDiv = document.getElementsByClassName("container");
const etchBox = document.querySelector(".etchBox")
const gridNumber = 16


for (let i = 0; i < (gridNumber ** 2); i++) {
    let singleGridDiv = document.createElement("div");
    singleGridDiv.setAttribute("class", "singleGridDiv");
    etchBox.appendChild(singleGridDiv);
}