console.log("start");

// setTimeout(()=>{
//   console.log("hiii");
// },5000);

const id = setInterval(() => {
  console.log("hiii");
},3000);

setTimeout(()=>{
  clearInterval(id);
},15000);

console.log("end");