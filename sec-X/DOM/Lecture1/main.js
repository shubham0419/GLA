// dom

const h1List = document.getElementsByTagName("h1");

// console.log(h1List[0].innerHTML);
// console.log(h1List[0].innerHTML);
// console.log(h1List[0].innerHTML);
// console.log(h1List[0].classList);
// console.log(h1List[0].className);
// console.log(h1List[0].id);

const h1ById = document.getElementById("head");
// console.log(h1ById);

// console.log(h1ById.innerHTML);
// console.log(h1ById.innerHTML);
// console.log(h1ById.innerHTML);
// console.log(h1ById.classList);
// console.log(h1ById.className);
// console.log(h1ById.id);

const h1byClass = document.getElementsByClassName("heading");
// console.log(h1byClass[0]);

const h1byQuerry = document.querySelector("#head");
const h1byQuerry2 = document.querySelector(".heading");

const h1ByQuerryAll = document.querySelectorAll("#head");
const h1ByQuerryAll2 = document.querySelectorAll(".heading");

// important getters

const para = document.getElementsByClassName("para")[0];
console.log(para);

console.log(para.parentElement);
console.log(para.parentElement.parentElement);
console.log(para.nextSibling.nextSibling);
console.log(para.children);

para.innerText = "hiiii by js";

h1ById.className = "heading2"

console.log(h1ById);