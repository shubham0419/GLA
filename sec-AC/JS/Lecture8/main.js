console.log("start");
setTimeout(()=>{
  console.log("hiii");
},2000);
setTimeout(()=>{
  console.log("hi 2");
},2000);
console.log("end");


let id = setInterval(() => {
  console.log("interval CB");
},(2000));

setTimeout(()=>clearInterval(id),10000);
