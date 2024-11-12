let h1 = document.getElementById("head");
// console.log(h1);

const paraByClass = document.getElementsByClassName("para");
// console.log(paraByClass);
// console.log(paraByClass[0]);

const paraByTagName = document.getElementsByTagName("p");
// console.log(paraByTagName);

const h1ByQuery = document.querySelector("#head");
// console.log(h1ByQuery);

const paraByQuery = document.querySelectorAll(".para");
// console.log(paraByQuery);


// how to read different properties of tag
// console.log(h1.innerText);
// console.log(h1.innerHTML);
// console.log(h1.textContent); //not ignores white space
// console.log(h1.outerHTML); //returns the whole h1 tag

// attributes
// console.log(h1.id);
// console.log(h1.className);
// console.log(h1.classList);
// console.log(h1.getAttribute("id"));
// console.log(h1.children);
// console.log(h1.parentElement);
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);


h1.innerText = "changed by JS"
h1.id = "changebyJs"
console.log(h1);
// h1.className = "assignedbyjs"

h1.classList.add("cl-4");
h1.classList.remove("cl-2");
h1.classList.toggle("cl-1");
h1.classList.toggle("cl-1");

h1.setAttribute("name","heading1ByJs");


const h3 = document.createElement("h3");
h3.innerHTML = "<span>this is span by js</span>";
h3.className = "cl-1 cl-2 cl-4";
h3.id = "head3";
console.log(h3);

// send element to HTML
const container = document.getElementById("container");
// container.append("dvfwfvwh");
container.appendChild(h3);
container.prepend(h3);
console.log(container);

container.before(h3);
container.after(h3);

