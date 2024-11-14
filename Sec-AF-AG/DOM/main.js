// console.log(document);

const h1 = document.getElementById("head");
console.log(h1);

// const pWithClass = document.getElementsByClassName("cl1");
// console.log(pWithClass);

// const allP = document.getElementsByTagName("p");
// console.log(allP);

// const eleByQuery = document.querySelector(".cl1");
// console.log(eleByQuery);

// const elementsByQuery = document.querySelectorAll(".cl1");
// console.log(elementsByQuery);

// attributes and methods , accessors
console.log(h1.innerText);
// console.log(h1.innerHTML);
// console.log(h1.textContent);
// console.log(h1.id);
// console.log(h1.className);
// console.log(h1.classList);
// h1.classList.add("cl5");
// h1.classList.remove("cl3");
// h1.classList.toggle("cl4");
// console.log(h1.classList);

// // overwrite
// h1.setAttribute("class","cl-1 cl2");
// console.log(h1.classList);

// const newVal = "BY JS"
// h1.innerText = "changed by JS";
// h1.innerHTML = `<em>${newVal}</em>`;

// h1.className = "cl-5";
// console.log(h1.classList);


// h1.style.display = "none";
h1.style.color = "blue";

// create elements
const div = document.createElement("div");
div.innerHTML = '<em>Created by</em> JS';
// div.className = "cl1";
// div.setAttribute("class","cl1");
div.classList.add("cl1");
// div.id = "container";
div.setAttribute("id","container");
console.log(div);

// to send created element to html
const main = document.getElementById("main");
main.appendChild(div);
// main.append("kdjbsbdwb");
main.prepend(div);

h1.after(div);
// h1.before(div);

// eventListerners

const btn = document.getElementById("btn");

btn.addEventListener("dblclick",(e)=>{
  console.log(e);
  h1.before(div);
});

main.addEventListener("click",(e)=>{
  console.log(e.target);
})

