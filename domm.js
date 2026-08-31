const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const subHeading3 = document.createElement("h3");
subHeading3.style.color = "blue";
subHeading3.textContent = "I'm blue h3";
container.appendChild(subHeading3);

const newDiv = document.createElement("div");
newDiv.style.border = "solid 1px black";
newDiv.style.backgroundColor = "pink";
container.appendChild(newDiv);