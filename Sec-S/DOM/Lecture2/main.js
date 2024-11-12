const button = document.getElementById("btn1");

button.addEventListener("click", (e)=>{
  console.log(e);
  console.log(e.target);
});

const container = document.getElementById("container");

container.addEventListener("click",(e)=>{
  console.log(e.target);
});



