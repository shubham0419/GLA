const h1 = document.getElementById("head");
// console.log(h1);

const paras = document.getElementsByClassName("para");
// console.log(paras);

const paraByTag = document.getElementsByTagName("p");
// console.log(paraByTag);

const h1Byid = document.querySelector("#head");
// console.log(h1Byid);
const pByQuery = document.querySelector(".para");
// console.log(pByQuery);

const allPByQuery = document.querySelectorAll(".para");
// console.log(allPByQuery);


// accessing properties
// console.log(h1.innerText);
// console.log(h1.innerHTML);
// console.log(h1.id);
// console.log(h1.children);
// console.log(h1.parentElement);
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);
// console.log(paras[0].className);
// console.log(paras[0].classList);

// Manipulation (update && create);

h1.innerText = "changed by JS"
h1.id = "headByJS";
// paras[0].classList.remove("para");
paras[0].classList.add("para3");
paras[0].classList.toggle("para2");
// console.log(paras[0]);

paras[0].classList.toggle("para2");
// console.log(paras[0]);

h1.setAttribute("class","para3"); //to add and overwrite attribute
h1.setAttribute("name","nameByJs");
// console.log(h1);

// element creation

const h2 = document.createElement("h2");
h2.innerText = "created byJs";
// h2.id = "createdByJs"
h2.setAttribute("id","createdByJs");
h2.classList.add("para3"); 
h2.setAttribute("class","para para2 para3");
// h2.setAttribute("class","para");
console.log(h2);

const container = document.getElementById("container");

container.append(h2);
container.prepend(h2);

container.before(h2);
container.after(h2);

container.style.display = "inline-block"
h2.style.display = "inline"


