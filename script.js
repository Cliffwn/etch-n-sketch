const containerDiv = document.getElementsByClassName("container");
const etchBox = document.querySelector(".etchBox");
const slider = document.getElementById("gridSlider");

console.log(slider.value);
console.log(containerDiv);

function makeGray() {
    this.style.backgroundColor = "gray";
}

function etchBoxSize(gridSizeFromSlider) {
    etchBox.setAttribute('style',
        `grid-template-columns: repeat(${gridSizeFromSlider}, 1fr);\
         grid-template-rows: repeat(${gridSizeFromSlider}, 1fr);`);

    for (let i = 0; i < (gridSizeFromSlider ** 2); i++) {
        let singleGridDiv = document.createElement("div");
        singleGridDiv.setAttribute("class", "singleGridDiv");
        singleGridDiv.addEventListener("mouseover", makeGray)
        etchBox.appendChild(singleGridDiv);
    };
};

etchBoxSize(slider.value);
// slider.addEventListener("onchange", etchBoxSize(slider.value));