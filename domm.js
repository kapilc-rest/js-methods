const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const container = document.querySelector("#container");

container.appendChild(para);