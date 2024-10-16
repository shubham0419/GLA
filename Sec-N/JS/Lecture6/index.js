let a = 10;
{
  console.log(a);
  let b =5;
  var c = 15;
}

// console.log(c);
// console.log(b);

// functions

function first(){
  console.log("hii");
}

first();

function sum(x,y,z){
  console.log(x+y+z);
  console.log(x-y-z);
}

sum(5,"6",7);


// function fun(x,y){
//   return x+y;
// }

// function fun(x,y){
//   return [x+y];
// }

function fun(x,y){
  return {result:x+y};
}
console.log(fun(10,13));
const result = fun(20,"30");

console.log(result);
console.log(typeof(result));

// default parameters
function fun(x,y,z=5){
  return x+y+z;
}

console.log(fun(5,7));


// arrow funtion
// const arrow = ()=>{
//   return "arrow function"
// }
// const arrow = (a,b)=>{
  //   return a+b
  // }
const arrow = (a,b)=> a+b

let ans = arrow(5,6);
console.log(ans);