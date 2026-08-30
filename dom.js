const container = document.querySelector("#container");
const display = container.firstElementChild;
console.log(display);

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // <div class="display"></div>

const div = document.createElement("div");
div.style.color = "blue";
div.setAttribute("style", "color: blue; background: white;");
