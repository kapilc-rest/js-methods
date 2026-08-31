const container = document.querySelector("#container");
const display = container.firstElementChild;
console.log(display);

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // <div class="display"></div>

const div = document.createElement("div");
div.setAttribute("style", "color: blue");
div.textContent = "Hello!";
container.insertBefore(div, controls);
div.setAttribute("id", "theDiv");
console.log(div.getAttribute("id"));
div.removeAttribute("id");
div.removeAttribute("class"); //nothing happens cause it doesnt even have class to begin with
div.innerHTML="<span>Hello world</span>";
