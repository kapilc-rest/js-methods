/*Exercise: Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */

const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const subHeading3 = document.createElement("h3");
subHeading3.style.color = "blue";
subHeading3.textContent = "I'm blue h3";
container.appendChild(subHeading3);
//adding new div with elements
const newDiv = document.createElement("div");
newDiv.style.border = "solid 1px black";
newDiv.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO!";

newDiv.appendChild(heading1);
newDiv.appendChild(paraInDiv);
container.appendChild(newDiv);

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World1");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
btn.addEventListener("click", function (e) {
  console.log(e);
});
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});