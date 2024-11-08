
console.log("start");
setTimeout(()=>{
  console.log('setTimeout');
},0);
console.log("end");

const id = setInterval(()=>{
  console.log('setInterval');
},2000);

// clearInterval(id);

setTimeout(()=>{
  clearInterval(id);
},10000);

setTimeout(()=>{
  let i=0;
  for(i;i<5;i++){
    console.log(i);
  }
},0);

