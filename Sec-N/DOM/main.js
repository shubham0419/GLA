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
console.log(h1.id);
console.log(h1.className);
console.log(h1.classList);
console.log(h1.getAttribute("id"));
console.log(h1.children);
console.log(h1.parentElement);
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);