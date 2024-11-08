let h1 = document.getElementById("head");
console.log(h1);

h1  = document.getElementsByClassName("heading");
console.log(h1);

h1 = document.getElementsByTagName("h1");
console.log(h1);

h1 = document.querySelector("#head");
h1 = document.querySelector("#head");
h1 = document.querySelector("h1");
console.log(h1);

h1 = document.querySelectorAll("#head")[0];
console.log(h1);


// manipulation
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.id);
console.log(h1.children);
console.log(h1.parentElement);