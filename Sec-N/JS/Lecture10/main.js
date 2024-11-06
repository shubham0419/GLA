

setTimeout(()=>{
  console.log('setTimeout 1');
},2000);

let date = new Date();
console.log(date.getTime());

// function timer(n){
//   let now = new Date().getTime();
//   while(new Date().getTime() < now+n){ }
//   console.log("times up");
// }

// timer(2000);

const id = setInterval(()=>{
  console.log('setInterval');
},2000);

// clearInterval(id);
setTimeout(()=>{
  clearInterval(id);
},10000)


console.log("start");
setTimeout(()=>{
  console.log('setTimeout 1');
},2000);
console.log("end");