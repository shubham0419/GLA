const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
  console.log(e);
  console.log(e.target);
});

const container = document.getElementById("container");
container.addEventListener("click",(e)=>{
  console.log(e.target);
})
