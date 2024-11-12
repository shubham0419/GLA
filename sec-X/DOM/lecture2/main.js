

const btn = document.getElementById("btn");
btn.addEventListener("click",(e)=>{
  console.log(e);
  console.log(e.target);
});

const container = document.getElementById("container");
container.addEventListener("click",(e)=>{
  console.log(e.target)
});

const input  = document.getElementById("input");
// input.addEventListener("keydown",(e)=>{
//   console.log(e.key);
// });

function handleChange(e){
  console.log(e.target.value);
}
