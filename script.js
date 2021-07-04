const containerDiv = document.getElementsByClassName("container");
const etchBox = document.querySelector(".etchBox");

const gridNumber = 16;
const sliderValue = document.getElementById("gridSlider").value;

console.log(sliderValue);

function etchBoxSize(gridSizeFromSlider) {
    etchBox.setAttribute('style',
        `grid-template-columns: repeat(${gridSizeFromSlider}, 1fr);\
         grid-template-rows: repeat(${gridSizeFromSlider}, 1fr);`);

    for (let i = 0; i < (gridSizeFromSlider ** 2); i++) {
        let singleGridDiv = document.createElement("div");
        singleGridDiv.setAttribute("class", "singleGridDiv");
        etchBox.appendChild(singleGridDiv);
    };
};

etchBoxSize(sliderValue);