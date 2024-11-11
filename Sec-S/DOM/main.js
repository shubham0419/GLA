const h1 = document.getElementById("head");
console.log(h1);

const paras = document.getElementsByClassName("para");
console.log(paras);

const paraByTag = document.getElementsByTagName("p");
// console.log(paraByTag);

const h1Byid = document.querySelector("#head");
// console.log(h1Byid);
const pByQuery = document.querySelector(".para");
// console.log(pByQuery);

const allPByQuery = document.querySelectorAll(".para");
// console.log(allPByQuery);


// accessing properties
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.id);
console.log(h1.children);
console.log(h1.parentElement);
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
console.log(paras[0].className);
console.log(paras[0].classList);

// Manipulation (update && create);

h1.innerText = "changed by JS"